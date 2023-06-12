import { Navbar } from './components/Navbar';
import { verticalButton, horizonButton } from '../../assets/images/codingTest';
import { Q000001, Q000002, Q000003, Q000004, Q000005, Q000006, Q000007, Q000008, Q000009, Q000010 } from '../../assets/programmers/index';
import './css/markdown.css';

export default function CodingTest() {
    return (
        <div className='block w-[100%] break-words break-keep shadow-[#172334]'>
            <Navbar />
            <section className='h-[3.5rem] flex relative bg-[#263747] px-[1rem] justify-between shadow-[0_0.0625rem_#172334]'>
                <h5 className='text-[white] pt-[15px]'>문자열 출력하기</h5>
                <span className='flex items-center justify-end h-[3rem]'>
                    <button className='w-[40px] h-[24px] text-[0.75rem] text-[white] rounded-[0.2rem_0_0_0.2rem] bg-[#44576c]'>
                        <h5 className='mt-1'>dark</h5>
                    </button>
                    <button className='w-[40px] h-[24px] text-[0.75rem] text-[#44576c] hover:text-[white] bg-[#263747] hover:bg-[#44576c] rounded-[0_0.2rem_0.2rem_0] mr-[-1px] border-[#44576c] border-[1px]'>
                        <h5 className='mt-1'>light</h5>
                    </button>
                    <button className='w-[59px] h-[24px] text-[0.75rem] text-[white] rounded-[0.2rem_0_0_0.2rem] bg-[#44576c] ml-[8px]'>
                        <h5 className='mt-1'>sublime</h5>
                    </button>
                    <button className='w-[34px] h-[24px] text-[0.75rem] text-[#44576c] hover:text-[white] bg-[#263747] hover:bg-[#44576c] mr-[-1px] border-[#44576c] border-[1px]'>
                        <h5 className='mt-1'>vim</h5>
                    </button>
                    <button className='w-[51px] h-[24px] text-[0.75rem] text-[#44576c] hover:text-[white] bg-[#263747] hover:bg-[#44576c] rounded-[0_0.2rem_0.2rem_0] mr-[-1px] border-[#44576c] border-[1px]'>
                        <h5 className='mt-1'>emacs</h5>
                    </button>
                    <button className='w-[88px] h-[24px] text-[0.75rem] text-[white] rounded-[0.2rem] bg-[#44576c] ml-[8px]'>
                        <h5 className='mt-1'>JavaScript</h5>
                    </button>
                </span>
            </section>
            <div className='min-h-[31.25rem] bg-[#263747]'>
                <section className='flex h-[calc(100vh-(2.9375rem+3.5rem+3.5625rem))]'>
                    <div className='w-[calc(40%-12px)] h-[100%] overflow-y-auto leading-7 px-[20px] py-[15px]'>
                        <Q000010 />
                    </div>
                    <div className='flex justify-end items-center w-[24px] border-r-[0.0625rem] border-[#172334]'>
                        <img className='h-[35px] cursor-ew-resize' src={verticalButton} />
                    </div>
                    <div className='w-[calc(60%-12px)]'>
                        <div className='h-[calc(60%-7px)]'>
                            <div className='border-b-[1px] border-[#172334]'>
                                <div className='p-[16px] w-[101px] h-[54px] text-[15px] text-[white] font-[700]'>
                                    <h5>solution.js</h5>
                                </div>
                            </div>
                            <div className='pt-[1rem] h-[calc(100%-54px)]'></div>
                            <div className='flex justify-center border-t-[1px] border-[#172334]'>
                                <img className='w-[35px] cursor-ns-resize' src={horizonButton} />
                            </div>
                            <div className='h-[calc(40%-7px)]'>
                                <div className='h-[41px] p-[0_16px] border-b-[1px] border-[#172334]'>
                                    <h5 className='text-[#4F6B81] text-[14px] pt-1'>실행 결과</h5>
                                </div>
                                <div>
                                    <h5 className='p-[16px] text-[#78909C] text-[14px]'>실행 결과가 여기에 표시됩니다.</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='flex flex-wrap justify-between h-[3.5625rem] bg-[#263747] border-t-[1px] border-[#172334] px-[1rem] py-[0.5rem]'>
                    <span className='flex'>
                        <button className='w-[113px] h-[40px] bg-[#44576c] hover:bg-[#37485D] text-[white] font-[600] rounded-[4px] mx-[4px]'>
                            <h5 className='mt-1'>질문하기</h5>
                        </button>
                        <button className='w-[183px] h-[40px] bg-[#44576c] hover:bg-[#37485D] text-[white] font-[600] rounded-[4px] mx-[4px]'>
                            <h5 className='mt-1'>테스트 케이스 추가하기</h5>
                        </button>
                    </span>
                    <span className='flex'>
                        <button className='w-[160px] h-[40px] bg-[#44576c] hover:bg-[#37485D] text-[white] font-[600] rounded-[4px] mx-[4px]'>
                            <h5 className='mt-1'>다른 사람의 풀이</h5>
                        </button>
                        <button className='w-[72px] h-[40px] bg-[#44576c] hover:bg-[#37485D] text-[white] font-[600] rounded-[4px] mx-[4px]'>
                            <h5 className='mt-1'>초기화</h5>
                        </button>
                        <button className='w-[91px] h-[40px] bg-[#44576c] hover:bg-[#37485D] text-[white] font-[600] rounded-[4px] mx-[4px]'>
                            <h5 className='mt-1'>코드 실행</h5>
                        </button>
                        <button className='w-[140px] h-[40px] bg-[#0078ff] hover:bg-[#0053f4] text-[white] font-[600] rounded-[4px] mx-[4px]'>
                            <h5 className='mt-1'>제출 후 채점하기</h5>
                        </button>
                    </span>
                </section>
            </div>
        </div>
    );
}
