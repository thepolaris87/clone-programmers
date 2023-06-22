import React, { useCallback, useEffect, useState } from 'react';
import { useQuery, useMutation } from 'react-query';
import { useParams } from 'react-router-dom';
import { getQuestion, postSolution, patchTestCase } from '@/apis/api';
import { verticalButton, horizonButton } from '@/assets/images/codingTest';
import * as MarkDown from '@/assets/programmers/index';
import { TestContainer } from './css/CodingTest.styles';
import { Modal } from '@/components/Modal';
import { Code } from '../../components/Code';
import { TestResult, HiddenResult, Navbar, BottomNavbar, Header, ModalContent, AnswerModalContent, TestModalContent } from './components';

export type ResultProps = {
    input: string[] | number[];
    output: number | string | string[] | number[];
};

export default function CodingTest() {
    const params = useParams();
    const { data, refetch } = useQuery(['question', params.questionId], () => getQuestion(params.questionId as string));
    const { mutate } = useMutation(postSolution);
    const { mutate: patchCase } = useMutation(patchTestCase, {
        onSuccess: () => {
            refetch();
        }
    });
    const [codeValue, setCodeValue] = useState('');
    const [results, setResults] = useState<{ [key: number]: number | string | null | string[] }>({});
    const [answers, setAnswers] = useState<{ [key: number]: number | string | null | string[] }>({});
    const [ans, setAns] = useState(false);
    const [totalNum, setTotalNum] = useState('');
    const [modal, setModal] = useState(false);
    const [ansModal, setAnsModal] = useState(false);
    const [testModal, setTestModal] = useState<boolean | undefined>(false);
    const [userTestCase, setUserTestCase] = useState(data.questionStatus.userTestCase);
    const [loading, setLoading] = useState(false);
    const [checkLoading, setCheckLoading] = useState(false);
    const answerNum = 0;
    const MarkDownTag = MarkDown[params.questionId as keyof typeof MarkDown];

    const onPostSolution = (status: string) => {
        mutate({ questionId: params.questionId as string, userCode: codeValue, status: status });
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
        setTotalNum('0');
        if (!data.questionStatus.hiddenCase) return;
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
    const onAddUserTestCase = () => {
        setUserTestCase([...userTestCase, { input: [], output: '' }]);
    };
    const onDeleteUserTestCase = (index: number) => {
        setUserTestCase((prev: ResultProps[]) => {
            return prev.filter((prevCase, idx) => idx !== index);
        });
    };
    const onChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const copy = [...userTestCase];
        copy[index][e.target.name] = e.target.value;
        setUserTestCase(copy);
    };
    const onClick = () => {
        setTestModal(false);
        patchCase({ questionId: params.questionId as string, userTestCase: userTestCase });
    };

    useEffect(() => {
        if (data) setCodeValue(data.questionStatus.userCode);
        if (data.questionStatus.hiddenCase) onResetResult(data.questionStatus.hiddenCase.length, setAnswers);
        onResetResult(data.questionStatus.testCase.length, setResults);
    }, [data, onResetResult]);

    return (
        <TestContainer>
            <div className="codingTest break-words break-keep shadow-[#172334] tracking-wider">
                <Navbar setModal={setModal} title={data.questionStatus.title} category={data.questionStatus.category} />
                <Header title={data.questionStatus.title} />
                <div className="min-h-[500px] h-[100%] bg-[#263747]">
                    <section className="flex flex-wrap h-[calc(100vh-(47px+56px+57px))]">
                        <span className="w-[calc(40%-12px)] h-[100%] overflow-y-auto leading-7 px-[20px] py-[15px]">
                            <MarkDownTag />
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
                                        <Code content={codeValue} color="#263747" onChange={setCodeValue} />
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
                                                <TestResult data={data.questionStatus.testCase} results={results} answerNum={answerNum} />
                                            ) : checkLoading ? (
                                                <HiddenResult data={data.questionStatus.hiddenCase} answers={answers} totalNum={totalNum} />
                                            ) : (
                                                <div className="text-[#78909C] text-[14px]">실행 결과가 여기에 표시됩니다.</div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <BottomNavbar functions={[onReset, runFunc, onSubmit, setTestModal]} questionId={params.questionId as string} />
                </div>
            </div>
            <Modal title="컴파일 옵션" width="700px" open={modal} onClick={setModal}>
                <ModalContent onClick={setModal} />
            </Modal>
            <Modal title={ans ? '정답입니다!' : '틀렸습니다!'} width="600px" open={ansModal} onClick={setAnsModal}>
                <AnswerModalContent onClick={setAnsModal} answer={ans} questionId={params.questionId as string} />
            </Modal>
            <Modal title="테스트 케이스 추가" width="100%" open={testModal} onClick={setTestModal}>
                <TestModalContent
                    onClick={onClick}
                    testCase={data.questionStatus.testCase}
                    userTestCase={userTestCase}
                    onAddUserTestCase={onAddUserTestCase}
                    onDeleteUserTestCase={onDeleteUserTestCase}
                    onChange={onChange}
                />
            </Modal>
        </TestContainer>
    );
}
