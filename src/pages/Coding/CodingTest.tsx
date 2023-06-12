import { useEffect, useState } from 'react';
import Editor, { useMonaco } from '@monaco-editor/react';
import { useQuery, useMutation } from 'react-query';
import { getQuestion, postQuestion } from '../../apis/api';
import { Navbar } from './components/Navbar';
import { verticalButton, horizonButton } from '../../assets/images/codingTest';
import { Q000001 } from '../../assets/programmers/index';
import { TestContainer } from './css/CodingTest.styles';

export default function CodingTest() {
    const monaco = useMonaco();
    const { data } = useQuery(['question', 'Q000001'], () => getQuestion('Q000001'));
    const { mutate } = useMutation(postQuestion);
    const [codeValue, setCodeValue] = useState('');

    const onPostQuestion = () => {
        mutate({ questionId: 'Q000001', userCode: codeValue, status: '2' });
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
            <div className='codingTest block w-[100%] break-words break-keep shadow-[#172334]'>
                <Navbar />
                <section className='h-[3.5rem] flex relative bg-[#263747] px-[1rem] justify-between shadow-[0_0.0625rem_#172334]'>
                    <h5 className='text-[white] pt-[15px]'>귤 고르기</h5>
                    <span className='flex items-center justify-end h-[3rem]'>
                        <button className='hidden w-[40px] h-[24px] text-[0.75rem] text-[white] rounded-[0.2rem_0_0_0.2rem] bg-[#44576c] md:block'>
                            <h5 className='mt-1'>dark</h5>
                        </button>
                        <button className='hidden w-[40px] h-[24px] text-[0.75rem] text-[#44576c] hover:text-[white] bg-[#263747] hover:bg-[#44576c] rounded-[0_0.2rem_0.2rem_0] mr-[-1px] border-[#44576c] border-[1px] md:block'>
                            <h5 className='mt-1'>light</h5>
                        </button>
                        <button className='hidden w-[59px] h-[24px] text-[0.75rem] text-[white] rounded-[0.2rem_0_0_0.2rem] bg-[#44576c] ml-[8px] md:block'>
                            <h5 className='mt-1'>sublime</h5>
                        </button>
                        <button className='hidden w-[34px] h-[24px] text-[0.75rem] text-[#44576c] hover:text-[white] bg-[#263747] hover:bg-[#44576c] mr-[-1px] border-[#44576c] border-[1px] md:block'>
                            <h5 className='mt-1'>vim</h5>
                        </button>
                        <button className='hidden w-[51px] h-[24px] text-[0.75rem] text-[#44576c] hover:text-[white] bg-[#263747] hover:bg-[#44576c] rounded-[0_0.2rem_0.2rem_0] mr-[-1px] border-[#44576c] border-[1px] md:block'>
                            <h5 className='mt-1'>emacs</h5>
                        </button>
                        <button className='w-[88px] h-[24px] text-[0.75rem] text-[white] rounded-[0.2rem] bg-[#44576c] ml-[8px]'>
                            <h5 className='mt-1'>JavaScript</h5>
                        </button>
                    </span>
                </section>
                <div className='min-h-[31.25rem] h-[100%] bg-[#263747]'>
                    <section className='flex flex-wrap h-[calc(100vh-(2.9375rem+3.5rem+3.5625rem))]'>
                        <div className='w-[calc(40%-12px)] h-[100%] overflow-y-auto leading-7 px-[20px] py-[15px]'>
                            <Q000001 />
                        </div>
                        <div className='flex justify-end items-center w-[24px] border-r-[0.0625rem] border-[#172334]'>
                            <img className='h-[35px] cursor-ew-resize' src={verticalButton} />
                        </div>
                        <div className='w-[calc(60%-12px)]'>
                            <div className='h-[calc(60%-7px)]'>
                                <div className='h-[100%]'>
                                    <div className='p-[16px] w-[100%] h-[54px] text-[15px] text-[white] font-[700] border-b-[1px] border-[#172334]'>
                                        <h5>solution.js</h5>
                                    </div>
                                    <div className='h-[calc(100%-54px)] w-[100%] pt-[16px]'>
                                        <Editor
                                            language='javascript'
                                            theme='theme'
                                            value={codeValue}
                                            onChange={(e) => setCodeValue(e)}
                                            options={{ fontSize: 16, minimap: { enabled: false }, scrollbar: { vertical: 'auto', horizontal: 'auto' } }}
                                        />
                                    </div>
                                </div>
                                <div className='flex justify-center border-t-[1px] border-[#172334]'>
                                    <img className='w-[35px] cursor-ns-resize' src={horizonButton} />
                                </div>
                                <div className='h-[calc(40%-7px)]'>
                                    <div className='h-[41px] p-[0_16px] border-b-[1px] border-[#172334]'>
                                        <h5 className='text-[#4F6B81] text-[14px] font-[700] pt-1'>실행 결과</h5>
                                    </div>
                                    <div>
                                        <h5 className='p-[16px] text-[#78909C] text-[14px]'>실행 결과가 여기에 표시됩니다.</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className='flex justify-between h-[3.5625rem] bg-[#263747] border-t-[1px] border-[#172334] px-[1rem] py-[0.5rem]'>
                        <span className='hidden md:flex'>
                            <button className='w-[113px] h-[40px] bg-[#44576c] hover:bg-[#37485D] text-[white] font-[600] rounded-[4px] mx-[4px]'>
                                <h5 className='mt-1'>질문하기</h5>
                            </button>
                            <button className='w-[183px] h-[40px] bg-[#44576c] hover:bg-[#37485D] text-[white] font-[600] rounded-[4px] mx-[4px]'>
                                <h5 className='mt-1'>테스트 케이스 추가하기</h5>
                            </button>
                        </span>
                        <span className='flex'>
                            <button className='hidden w-[160px] h-[40px] bg-[#44576c] hover:bg-[#37485D] text-[white] font-[600] rounded-[4px] mx-[4px] md:block'>
                                <h5 className='mt-1'>다른 사람의 풀이</h5>
                            </button>
                            <button className='w-[72px] h-[40px] bg-[#44576c] hover:bg-[#37485D] text-[white] font-[600] rounded-[4px] mx-[4px]'>
                                <h5 className='mt-1'>초기화</h5>
                            </button>
                            <button className='w-[91px] h-[40px] bg-[#44576c] hover:bg-[#37485D] text-[white] font-[600] rounded-[4px] mx-[4px]'>
                                <h5 className='mt-1'>코드 실행</h5>
                            </button>
                            <button className='w-[140px] h-[40px] bg-[#0078ff] hover:bg-[#0053f4] text-[white] font-[600] rounded-[4px] mx-[4px]' onClick={onPostQuestion}>
                                <h5 className='mt-1'>제출 후 채점하기</h5>
                            </button>
                        </span>
                    </section>
                </div>
            </div>
        </TestContainer>
    );
}
