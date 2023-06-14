import { useEffect, useState } from 'react';
import Editor, { useMonaco } from '@monaco-editor/react';
import { useQuery, useMutation } from 'react-query';
import { getQuestion, postQuestion } from '@/apis/api';
import { Navbar } from './components/Navbar';
import { verticalButton, horizonButton } from '@/assets/images/codingTest';
import { Q000001 } from '@/assets/programmers/index';
import { TestContainer } from './css/CodingTest.styles';
import { Modal } from '@/components/Modal';

type ResultProps = {
    input: number | string | string[] | number[];
    output: number | string | string[] | number[];
};
export default function CodingTest() {
    const monaco = useMonaco();
    const questionId = 'Q000001';
    const { data } = useQuery(['question', questionId], () => getQuestion(questionId));
    const { mutate } = useMutation(postQuestion);
    const [codeValue, setCodeValue] = useState('');
    const [results, setResult] = useState<number[]>([]);
    const [modal, setModal] = useState(false);
    let answerNum = 0;

    const onPostQuestion = () => {
        mutate({ questionId: questionId, userCode: codeValue, status: '2' });
    };
    const onReset = () => {
        const value = window.confirm('정말로 초기화하시겠습니까?');
        if (value) setCodeValue(data.questionStatus.defaultCode);
    };

    const runFunc = () => {
        setResult([]);
        const execFunc = new Function('return ' + codeValue)();
        data.questionStatus.testCase.forEach((result: ResultProps) => {
            const answer = execFunc(result.input[0], result.input[1]);
            setResult((prev) => {
                return [...prev, answer];
            });
        });
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
    }, [monaco, data]);

    return (
        <TestContainer>
            <div className="codingTest block w-[100%] break-words break-keep shadow-[#172334] tracking-wider">
                <Navbar setModal={setModal} />
                <section className="h-[3.5rem] flex relative bg-[#263747] px-[1rem] justify-between shadow-[0_0.0625rem_#172334]">
                    <h5 className="text-[white] pt-[15px]">귤 고르기</h5>
                    <span className="flex items-center justify-end h-[3rem]">
                        <button className="hidden w-[40px] h-[24px] text-[0.75rem] text-[white] rounded-[0.2rem_0_0_0.2rem] bg-[#44576c] md:block">
                            <h5 className="mt-1">dark</h5>
                        </button>
                        <button className="hidden w-[40px] h-[24px] text-[0.75rem] text-[#44576c] hover:text-[white] bg-[#263747] hover:bg-[#44576c] rounded-[0_0.2rem_0.2rem_0] mr-[-1px] border-[#44576c] border-[1px] md:block">
                            <h5 className="mt-1">light</h5>
                        </button>
                        <button className="hidden w-[59px] h-[24px] text-[0.75rem] text-[white] rounded-[0.2rem_0_0_0.2rem] bg-[#44576c] ml-[8px] md:block">
                            <h5 className="mt-1">sublime</h5>
                        </button>
                        <button className="hidden w-[34px] h-[24px] text-[0.75rem] text-[#44576c] hover:text-[white] bg-[#263747] hover:bg-[#44576c] mr-[-1px] border-[#44576c] border-[1px] md:block">
                            <h5 className="mt-1">vim</h5>
                        </button>
                        <button className="hidden w-[51px] h-[24px] text-[0.75rem] text-[#44576c] hover:text-[white] bg-[#263747] hover:bg-[#44576c] rounded-[0_0.2rem_0.2rem_0] mr-[-1px] border-[#44576c] border-[1px] md:block">
                            <h5 className="mt-1">emacs</h5>
                        </button>
                        <button className="w-[88px] h-[24px] text-[0.75rem] text-[white] rounded-[0.2rem] bg-[#44576c] ml-[8px]">
                            <h5 className="mt-1">JavaScript</h5>
                        </button>
                    </span>
                </section>
                <div className="min-h-[31.25rem] h-[100%] bg-[#263747]">
                    <section className="flex flex-wrap h-[calc(100vh-(2.9375rem+3.5rem+3.5625rem))]">
                        <span className="w-[calc(40%-12px)] h-[100%] overflow-y-auto leading-7 px-[20px] py-[15px]">
                            <Q000001 />
                        </span>
                        <div className="flex justify-end items-center w-[24px] border-r-[0.0625rem] border-[#172334]">
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
                                    <div className="h-[100%] px-[1rem] overflow-auto">
                                        <div className="text-[14px] leading-[1.5rem] pt-[1rem] bg-[#263747] text-[#78909c]">
                                            {results.length === 0 ? (
                                                <div className="text-[#78909C] text-[14px]">
                                                    실행 결과가 여기에 표시됩니다.
                                                </div>
                                            ) : (
                                                <div className="mb-[1.3125rem] font-[white] p-0 bc-[#263747] whitespace-pre-wrap break-words">
                                                    {data.questionStatus.testCase.map(
                                                        (result: ResultProps, index: number) => {
                                                            const answer = result.output === results[index];
                                                            if (answer) answerNum += 1;
                                                            return (
                                                                <table
                                                                    key={index}
                                                                    className="w-[calc(100%-1rem)] pr-[1rem] border-[#172334] border-[1px]"
                                                                >
                                                                    <tbody>
                                                                        <tr>
                                                                            <td
                                                                                className="bg-[#202b3d] text-[#b2c0cc] text-[14px] p-[4px_16px] leading-[1.5rem]"
                                                                                colSpan={2}
                                                                            >
                                                                                테스트 &nbsp; {index + 1}
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td
                                                                                className="bg-[#202b3d] text-[#44576c] w-[10rem] text-[14px] p-[2px_8px] leading-[1.5rem]"
                                                                                align="right"
                                                                            >
                                                                                입력값&nbsp;
                                                                                <span className="text-[#44576c] text-[14px]">
                                                                                    &#62;
                                                                                </span>
                                                                            </td>
                                                                            <td className="bg-[#202b3d] text-[14px] p-[2px_8px_2px_0] leading-[1.5rem]">
                                                                                {typeof result.input[0] === 'object'
                                                                                    ? '[' +
                                                                                      String(result.input[0]) +
                                                                                      ']'
                                                                                    : String(result.input[0])}
                                                                                ,&nbsp;
                                                                                {result.input[1] &&
                                                                                typeof result.input[1] === 'object'
                                                                                    ? '[' +
                                                                                      String(result.input[1]) +
                                                                                      ']'
                                                                                    : result.input[1] &&
                                                                                      String(result.input[1])}
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td
                                                                                className="bg-[#202b3d] text-[#44576c] w-[10rem] text-[14px] p-[2px_8px] leading-[1.5rem]"
                                                                                align="right"
                                                                            >
                                                                                기댓값&nbsp;
                                                                                <span className="text-[#44576c] text-[14px]">
                                                                                    &#62;
                                                                                </span>
                                                                            </td>
                                                                            <td className="bg-[#202b3d] text-[14px] p-[2px_8px_2px_0] leading-[1.5rem]">
                                                                                {result.output}
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td
                                                                                className="bg-[#202b3d] text-[#44576c] w-[10rem] text-[14px] p-[2px_8px] leading-[1.5rem]"
                                                                                align="right"
                                                                            >
                                                                                실행 결과&nbsp;
                                                                                <span className="text-[#44576c] text-[14px]">
                                                                                    &#62;
                                                                                </span>
                                                                            </td>
                                                                            <td
                                                                                className={`bg-[#202b3d] ${
                                                                                    answer
                                                                                        ? 'text-[#0078ff]'
                                                                                        : 'text-[#d32f2f]'
                                                                                } text-[14px] p-[2px_8px_2px_0] leading-[1.5rem]`}
                                                                            >
                                                                                {answer
                                                                                    ? '테스트를 통과하였습니다.'
                                                                                    : `실행한 결과 값 ${result[index]}이 기댓값 ${result.output}과 다릅니다.`}
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            );
                                                        }
                                                    )}
                                                    <div className="text-[#98a8b9] text-[12.25px] m-[1.5rem_0_0.5rem_0]">
                                                        테스트 결과 (~˘▾˘)~
                                                    </div>
                                                    <div
                                                        className={`${
                                                            answerNum === results.length
                                                                ? 'text-[#0078ff]'
                                                                : 'text-[#d32f2f]'
                                                        } text-[16px] font-[500] m-[0.25rem_0_1.5rem_0]`}
                                                    >
                                                        {results.length}개 중 {answerNum}개 성공
                                                    </div>
                                                    {answerNum === 3 && (
                                                        <div className="text-[#5f7f90] text-[12.25px] m-[0.25rem_0] leading-5">
                                                            샘플 테스트 케이스를 통과했다는 의미로, 작성한 코드가 문제의
                                                            정답은 아닐 수 있습니다. <br /> (샘플 테스트 케이스는
                                                            [테스트 케이스 추가하기] 버튼을 통해 확인하실 수 있습니다.)
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="flex justify-between h-[3.5625rem] bg-[#263747] border-t-[1px] border-[#172334] px-[1rem] py-[0.5rem]">
                        <span className="hidden md:flex">
                            <button className="w-[113px] h-[40px] bg-[#44576c] hover:bg-[#37485D] text-[white] font-[600] rounded-[4px] mx-[4px]">
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
                                onClick={onPostQuestion}
                            >
                                <h5 className="mt-1">제출 후 채점하기</h5>
                            </button>
                        </span>
                    </section>
                </div>
            </div>
            <Modal title="컴파일 옵션" button="닫기" open={modal} onClick={setModal}>
                <table>
                    <thead className="text-left border-t-[1px] border-[#d7e2eb]">
                        <tr>
                            <th className="w-[95px] p-[0.25rem_0.5rem]">언어</th>
                            <th className="w-[172px] p-[0.25rem_0.5rem]">컴파일러</th>
                            <th className="w-[384px] p-[0.25rem_0.5rem]">컴파일 커맨드</th>
                        </tr>
                    </thead>
                    <tbody className="bg-[rgba(50,50,144,0.02)] border-t-[1px] border-[#d7e2eb]">
                        <tr>
                            <td className="w-[172px] p-[0.25rem_0.5rem]">JavaScript</td>
                            <td className="w-[172px] p-[0.25rem_0.5rem]">Node.js 16.17.0</td>
                            <td className="w-[384px] p-[0.25rem_0.5rem]"></td>
                        </tr>
                    </tbody>
                </table>
            </Modal>
        </TestContainer>
    );
}
