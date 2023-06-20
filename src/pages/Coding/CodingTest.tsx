import React, { useCallback, useEffect, useState } from 'react';
import Editor, { useMonaco } from '@monaco-editor/react';
import { useQuery, useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { getQuestion, postSolution } from '@/apis/api';
import { Navbar } from './components/Navbar';
import { verticalButton, horizonButton } from '@/assets/images/codingTest';
import { Q000003 } from '@/assets/programmers/index';
import { TestContainer } from './css/CodingTest.styles';
import { Modal } from '@/components/Modal';
import { ModalContent } from './components/ModalContent';
import { Spinner } from '@/components/Spinner';
import { AnswerModalContent } from './components/AnswerModalContent';

type ResultProps = {
    input: string[] | number[];
    output: number | string | string[] | number[];
};
export default function CodingTest() {
    const monaco = useMonaco();
    const navigate = useNavigate();
    const questionId = 'Q000003';
    const { data } = useQuery(['question', questionId], () => getQuestion(questionId));
    const { mutate } = useMutation(postSolution);
    const [codeValue, setCodeValue] = useState('');
    const [results, setResults] = useState<{ [key: number]: number | string | null | string[] }>({});
    const [answers, setAnswers] = useState<{ [key: number]: number | string | null | string[] }>({});
    const [ans, setAns] = useState(false);
    const [totalNum, setTotalNum] = useState('');
    const [modal, setModal] = useState(false);
    const [ansModal, setAnsModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [checkLoading, setCheckLoading] = useState(false);
    let answerNum = 0;

    const onPostSolution = (status: string) => {
        mutate({ questionId: questionId, userCode: codeValue, status: status });
    };
    const onReset = () => {
        const value = window.confirm('정말로 초기화하시겠습니까?');
        if (value) setCodeValue(data.questionStatus.defaultCode);
    };
    const onResetResult = useCallback((idx: number, setValue: (value: any) => void) => {
        for (let index = 0; index < idx; index++) {
            setValue((prev: any) => {
                return { ...prev, [index]: null };
            });
        }
    }, []);
    console.log(results, answers);

    const runFunc = () => {
        setCheckLoading(false);
        setLoading(true);
        onResetResult(data.questionStatus.testCase.length, setResults);
        const execFunc = new Function('return ' + codeValue)();
        data.questionStatus.testCase.forEach((result: ResultProps, index: number) => {
            const answer = execFunc(...result.input);
            setTimeout(() => {
                setResults((prev) => {
                    return { ...prev, [index]: answer };
                });
            }, 1500);
        });
    };
    const onSubmit = async () => {
        setLoading(false);
        setCheckLoading(true);
        onResetResult(data.questionStatus.hiddenCase.length, setAnswers);
        let score = 0;
        const execFunc = new Function('return ' + codeValue)();
        const promises = data.questionStatus.hiddenCase.map((result: ResultProps, index: number) => {
            return () =>
                new Promise<void>((resolve) => {
                    const answer = execFunc(...result.input);
                    const ans = answer === result.output ? '통과' : '실패';
                    if (ans === '통과') score += 1;
                    setTimeout(() => {
                        setAnswers((prev) => {
                            return { ...prev, [index]: ans };
                        });
                        resolve();
                    }, 1000);
                });
        });
        await Promise.all(promises.map((promise: () => void) => promise()));
        const ans = score === data.questionStatus.hiddenCase.length;
        setTotalNum(((score / data.questionStatus.hiddenCase.length) * 100).toFixed(1));
        setTimeout(() => {
            setAns(ans ? true : false);
            setAnsModal(true);
            onPostSolution(ans ? '2' : '1');
        }, 500);
    };

    useEffect(() => {
        if (!monaco) return;
        monaco.editor.defineTheme('theme', {
            base: 'vs-dark',
            inherit: true,
            rules: [],
            colors: {
                'editor.background': '#263747',
                'editor.selectionBackground': '#44576c',
                'editorCursor.foreground': '#ffffff',
                'editor.lineHighlightBackground': '#172334',
                'editorLineNumber.foreground': '#44576c',
                'editor.inactiveSelectionBackground': '#7e890b'
            }
        });
        monaco.editor.setTheme('theme');
        if (data) setCodeValue(data.questionStatus.userCode);
        onResetResult(data.questionStatus.hiddenCase.length, setAnswers);
        onResetResult(data.questionStatus.testCase.length, setResults);
    }, [monaco, data, onResetResult]);

    return (
        <TestContainer>
            <div className="codingTest break-words break-keep shadow-[#172334] tracking-wider">
                <Navbar setModal={setModal} />
                <section className="h-[56px] flex relative bg-[#263747] px-[16px] justify-between shadow-[0_1px_#172334]">
                    <h5 className="text-[white] pt-[15px]">귤 고르기</h5>
                    <span className="flex items-center justify-end h-[48px]">
                        <button className="hidden w-[40px] h-[24px] text-[12px] text-[white] rounded-[3.2px_0_0_3.2px] bg-[#44576c] md:block">
                            <h5 className="mt-1">dark</h5>
                        </button>
                        <button className="hidden w-[40px] h-[24px] text-[12px] text-[#44576c] hover:text-[white] bg-[#263747] hover:bg-[#44576c] rounded-[0_3.2px_3.2px_0] mr-[-1px] border-[#44576c] border-[1px] md:block">
                            <h5 className="mt-1">light</h5>
                        </button>
                        <button className="hidden w-[59px] h-[24px] text-[12px] text-[white] rounded-[3.2px_0_0_3.2px] bg-[#44576c] ml-[8px] md:block">
                            <h5 className="mt-1">sublime</h5>
                        </button>
                        <button className="hidden w-[34px] h-[24px] text-[12px] text-[#44576c] hover:text-[white] bg-[#263747] hover:bg-[#44576c] mr-[-1px] border-[#44576c] border-[1px] md:block">
                            <h5 className="mt-1">vim</h5>
                        </button>
                        <button className="hidden w-[51px] h-[24px] text-[12px] text-[#44576c] hover:text-[white] bg-[#263747] hover:bg-[#44576c] rounded-[0_3.2px_3.2px_0] mr-[-1px] border-[#44576c] border-[1px] md:block">
                            <h5 className="mt-1">emacs</h5>
                        </button>
                        <button className="w-[88px] h-[24px] text-[12px] text-[white] rounded-[3.2px] bg-[#44576c] ml-[8px]">
                            <h5 className="mt-1">JavaScript</h5>
                        </button>
                    </span>
                </section>
                <div className="min-h-[500px] h-[100%] bg-[#263747]">
                    <section className="flex flex-wrap h-[calc(100vh-(47px+56px+57px))]">
                        <span className="w-[calc(40%-12px)] h-[100%] overflow-y-auto leading-7 px-[20px] py-[15px]">
                            <Q000003 />
                        </span>
                        <div className="flex justify-end items-center w-[24px] border-r-[1px] border-[#172334]">
                            <img className="h-[35px] cursor-ew-resize" src={verticalButton} />
                        </div>
                        <div className="w-[calc(60%-12px)] h-[100%]">
                            <div className="h-[calc(60%-7px)]">
                                <div className="h-[100%]">
                                    <div className="p-[16px] w-[100%] h-[54px] text-[15px] text-[white] font-[700] border-b-[1px] border-[#172334]">
                                        <h5>solution.js</h5>
                                    </div>
                                    <div className="h-[calc(100%-54px)] pt-[16px]">
                                        <Editor
                                            language="javascript"
                                            theme="theme"
                                            value={codeValue}
                                            onChange={(e) => setCodeValue(e as string)}
                                            options={{
                                                fontSize: 16,
                                                minimap: { enabled: false },
                                                scrollbar: { vertical: 'auto', horizontal: 'auto' }
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-center border-t-[1px] border-[#172334]">
                                    <img className="w-[35px] cursor-ns-resize" src={horizonButton} />
                                </div>
                                <div className="h-[calc(53%-7px)]">
                                    <div className="h-[41px] p-[0_16px] border-b-[1px] border-[#172334]">
                                        <h5 className="text-[#4F6B81] text-[14px] font-[700] pt-1">실행 결과</h5>
                                    </div>
                                    <div className="h-[100%] px-[16px] overflow-auto">
                                        <div className="text-[14px] leading-[24px] pt-[16px] bg-[#263747] text-[#78909c]">
                                            {loading ? (
                                                <React.Fragment>
                                                    {data.questionStatus.testCase.map((result: ResultProps, index: number) => {
                                                        const answer = result.output === results[index];
                                                        if (answer) answerNum += 1;
                                                        return (
                                                            <table key={index} className="w-[calc(100%-16px)] pr-[16px] border-[#172334] border-[1px]">
                                                                <tbody>
                                                                    <tr>
                                                                        <td
                                                                            className="bg-[#202b3d] text-[#b2c0cc] text-[14px] p-[4px_16px] leading-[24px]"
                                                                            colSpan={2}
                                                                        >
                                                                            테스트 &nbsp; {index + 1}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td
                                                                            className="bg-[#202b3d] text-[#44576c] w-[160px] text-[14px] p-[2px_8px] leading-[24px]"
                                                                            align="right"
                                                                        >
                                                                            입력값&nbsp;
                                                                            <span className="text-[#44576c] text-[14px]">&#62;</span>
                                                                        </td>
                                                                        <td className="bg-[#202b3d] text-[14px] p-[2px_8px_2px_0] leading-[24px]">
                                                                            {typeof result.input[0] === 'object'
                                                                                ? '[' + String(result.input[0]) + ']'
                                                                                : String(result.input[0])}
                                                                            {result.input[1] && typeof result.input[1] === 'object'
                                                                                ? ', [' + String(result.input[1]) + ']'
                                                                                : result.input[1] && String(result.input[1])}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td
                                                                            className="bg-[#202b3d] text-[#44576c] w-[160px] text-[14px] p-[2px_8px] leading-[24px]"
                                                                            align="right"
                                                                        >
                                                                            기댓값&nbsp;
                                                                            <span className="text-[#44576c] text-[14px]">&#62;</span>
                                                                        </td>
                                                                        <td className="bg-[#202b3d] text-[14px] p-[2px_8px_2px_0] leading-[24px]">
                                                                            {result.output}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td
                                                                            className="bg-[#202b3d] text-[#44576c] w-[160px] text-[14px] p-[2px_8px] leading-[24px]"
                                                                            align="right"
                                                                        >
                                                                            실행 결과&nbsp;
                                                                            <span className="text-[#44576c] text-[14px]">&#62;</span>
                                                                        </td>
                                                                        <td
                                                                            className={classNames(
                                                                                'bg-[#202b3d] text-[14px] p-[2px_8px_2px_0] leading-[24px]',
                                                                                answer ? 'text-[#0078ff]' : 'text-[#d32f2f]'
                                                                            )}
                                                                        >
                                                                            {results[index] === null ? (
                                                                                <Spinner />
                                                                            ) : answer ? (
                                                                                '테스트를 통과하였습니다.'
                                                                            ) : (
                                                                                `실행한 결과 값 ${results[index]}이 기댓값 ${result.output}과 다릅니다.`
                                                                            )}
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        );
                                                    })}
                                                    {Object.keys(results).every((result, index) => results[index] !== null) && (
                                                        <React.Fragment>
                                                            <div>{Object.keys(results).every((result) => result !== null)}</div>
                                                            <div className="text-[#98a8b9] text-[12.25px] m-[24px_0_8px_0]">테스트 결과 (~˘▾˘)~</div>
                                                            <div
                                                                className={classNames(
                                                                    'text-[16px] font-[500] m-[4px_0_24px_0]',
                                                                    answerNum === Object.keys(results).length ? 'text-[#0078ff]' : 'text-[#d32f2f]'
                                                                )}
                                                            >
                                                                {Object.keys(results).length}개 중 {answerNum}개 성공
                                                            </div>
                                                            {answerNum === Object.keys(results).length && (
                                                                <div className="text-[#5f7f90] text-[12.25px] m-[4px_0] leading-5">
                                                                    샘플 테스트 케이스를 통과했다는 의미로, 작성한 코드가 문제의 정답은 아닐 수 있습니다. <br />{' '}
                                                                    (샘플 테스트 케이스는 [테스트 케이스 추가하기] 버튼을 통해 확인하실 수 있습니다.)
                                                                </div>
                                                            )}
                                                        </React.Fragment>
                                                    )}
                                                </React.Fragment>
                                            ) : checkLoading ? (
                                                <div className="mb-[21px] p-0 bc-[#263747] whitespace-pre-wrap break-words">
                                                    <div className="text-[#5f7f90] text-[12.25px] m-[4px_0] leading-5">
                                                        정확성&nbsp;&nbsp;&nbsp;&nbsp;테스트
                                                    </div>
                                                    {data.questionStatus.hiddenCase.map((result: ResultProps, index: number) => {
                                                        return (
                                                            <table key={index} className="w-[calc(100%-16px)] pr-[16px] border-[#172334] border-[1px]">
                                                                <tbody>
                                                                    <tr>
                                                                        <td className="w-[160px] bg-[#202b3d] text-[#44576c] text-[14px] p-[4px_16px] leading-[1.5] text-right">
                                                                            테스트&nbsp;{index + 1}&nbsp;&nbsp;&#62;
                                                                        </td>
                                                                        <td
                                                                            className={classNames(
                                                                                answers[index] === '통과' ? 'text-[#0078ff]' : 'text-[#d32f2f]',
                                                                                'bg-[#202b3d] text-[14px] p-[2px_8px_2px_0] leading-[1.5]'
                                                                            )}
                                                                        >
                                                                            {answers[index] === null ? <Spinner /> : answers[index]}
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        );
                                                    })}
                                                    {Object.keys(answers).every((answer) => answer !== null) && (
                                                        <React.Fragment>
                                                            <p className="m-[24px_0_8px_0] text-[#98abb9] text-[12.25px] leading-5">채점 결과</p>
                                                            <p className="my-[4px] text-[#5F7F90] text-[12.25px] leading-5">정확성 : {totalNum}</p>
                                                            <p className="my-[4px] text-[#5F7F90] text-[12.25px] leading-5">합계 : {totalNum} / 100.0</p>
                                                        </React.Fragment>
                                                    )}
                                                </div>
                                            ) : (
                                                <div className="text-[#78909C] text-[14px]">실행 결과가 여기에 표시됩니다.</div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="flex justify-between h-[57px] bg-[#263747] border-t-[1px] border-[#172334] px-[16px] py-[8px]">
                        <span className="hidden md:flex">
                            <button
                                className="w-[113px] h-[40px] bg-[#44576c] hover:bg-[#37485D] text-[white] font-[600] rounded-[4px] mx-[4px]"
                                onClick={() => navigate(`/learn/courses/${questionId}/questions`)}
                            >
                                <h5 className="mt-1">질문하기</h5>
                            </button>
                            <button className="w-[183px] h-[40px] bg-[#44576c] hover:bg-[#37485D] text-[white] font-[600] rounded-[4px] mx-[4px]">
                                <h5 className="mt-1">테스트 케이스 추가하기</h5>
                            </button>
                        </span>
                        <span className="flex">
                            <button className="hidden w-[160px] h-[40px] bg-[#44576c] hover:bg-[#37485D] text-[white] font-[600] rounded-[4px] mx-[4px] md:block">
                                <h5 className="mt-1">다른 사람의 풀이</h5>
                            </button>
                            <button
                                className="w-[72px] h-[40px] bg-[#44576c] hover:bg-[#37485D] text-[white] font-[600] rounded-[4px] mx-[4px]"
                                onClick={onReset}
                            >
                                <h5 className="mt-1">초기화</h5>
                            </button>
                            <button
                                className="w-[91px] h-[40px] bg-[#44576c] hover:bg-[#37485D] text-[white] font-[600] rounded-[4px] mx-[4px]"
                                onClick={runFunc}
                            >
                                <h5 className="mt-1">코드 실행</h5>
                            </button>
                            <button
                                className="w-[140px] h-[40px] bg-[#0078ff] hover:bg-[#0053f4] text-[white] font-[600] rounded-[4px] mx-[4px]"
                                onClick={onSubmit}
                            >
                                <h5 className="mt-1">제출 후 채점하기</h5>
                            </button>
                        </span>
                    </section>
                </div>
            </div>
            <Modal title="컴파일 옵션" width="700px" open={modal} onClick={setModal}>
                <ModalContent onClick={setModal} />
            </Modal>
            <Modal title={ans ? '정답입니다!' : '틀렸습니다!'} width="600px" open={ansModal} onClick={setAnsModal}>
                <AnswerModalContent onClick={setAnsModal} answer={ans} />
            </Modal>
        </TestContainer>
    );
}
