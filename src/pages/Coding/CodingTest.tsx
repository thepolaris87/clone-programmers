import { CodingNavbar } from '../../components/CodingNavbar';
import { Button } from '../../components/Button';
import { verticalButton } from '../../assets/codingTest';
import { horizonButton } from '../../assets/codingTest';

export default function CodingTest() {
    return (
        <div className='block w-[100%] break-words break-keep shadow-[#172334]'>
            <CodingNavbar />
            <div className='h-[3.5rem] flex relative bg-[#263747] px-[1rem] justify-between shadow-[0_0.0625rem_#172334]'>
                <div className='text-[white] pt-[15px] font-[NotoSansRegular]'>문자열 출력하기</div>
                <div className='flex items-center justify-end h-[3rem]'>
                    <Button name='dark' c='white' width='40px' height='24px' fontSize='0.75rem' br='0.2rem 0 0 0.2rem' />
                    <Button
                        name='light'
                        c='#44576c'
                        bc='#263747'
                        border='1px solid #44576c'
                        width='40px'
                        height='24px'
                        fontSize='0.75rem'
                        br='0 0.2rem 0.2rem 0'
                        hbc='#44576c'
                        hc='white'
                        mr='-1px'
                    />
                    <Button name='sublime' c='white' width='59px' height='24px' fontSize='0.75rem' br='0.2rem 0 0 0.2rem' ml='8px' />
                    <Button name='vim' c='#44576c' bc='#263747' border='1px solid #44576c' width='34px' height='24px' fontSize='0.75rem' mr='-1px' hbc='#44576c' hc='white' />
                    <Button
                        name='emacs'
                        c='#44576c'
                        bc='#263747'
                        border='1px solid #44576c'
                        width='51px'
                        height='24px'
                        fontSize='0.75rem'
                        br='0 0.2rem 0.2rem 0'
                        mr='-1px'
                        hbc='#44576c'
                        hc='white'
                    />
                    <Button name='JavaScript' c='white' width='88px' height='24px' fontSize='0.75rem' br='0.2rem' ml='8px' />
                </div>
            </div>
            <div className='min-h-[31.25rem] bg-[#263747]'>
                <div className='flex h-[calc(100vh-(2.9375rem+3.5rem+3.5625rem))]'>
                    <div className='w-[calc(40%-12px)] h-[100%]'> {/* <iframe src='http://192.168.101.10:9000'></iframe> */}</div>
                    <div className='flex justify-end items-center w-[24px] border-r-[0.0625rem] border-[#172334]'>
                        <img className='h-[35px] cursor-ew-resize' src={verticalButton} />
                    </div>
                    <div className='w-[calc(60%-12px)]'>
                        <div className='h-[calc(60%-7px)]'>
                            <div className='border-b-[1px] border-[#172334]'>
                                <div className='p-[16px] w-[101px] h-[54px] text-[15px] text-[white] font-[700]'>
                                    <div>solution.js</div>
                                </div>
                            </div>
                            <div className='pt-[1rem] h-[calc(100%-54px)]'></div>
                            <div className='flex justify-center border-t-[1px] border-[#172334]'>
                                <img className='w-[35px] cursor-ns-resize' src={horizonButton} />
                            </div>
                            <div className='h-[calc(40%-7px)]'>
                                <div className='h-[41px] p-[0_16px] border-b-[1px] border-[#172334]'>
                                    <div className='text-[#4F6B81] text-[14px] pt-1'>실행 결과</div>
                                </div>
                                <div>
                                    <div className='p-[16px] text-[#78909C] text-[14px]'>실행 결과가 여기에 표시됩니다.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-wrap justify-between h-[3.5625rem] bg-[#263747] border-t-[1px] border-[#172334] px-[1rem] py-[0.5rem]'>
                    <div className='flex'>
                        <Button name='질문하기' br='4px' mr='4px' ml='4px' width='113px' height='40px' hbc='#37485D' />
                        <Button name='테스트 케이스 추가하기' br='4px' mr='4px' ml='4px' width='183px' height='40px' hbc='#37485D' />
                    </div>
                    <div className='flex'>
                        <Button name='다른 사람의 풀이' br='4px' mr='4px' ml='4px' width='160px' height='40px' hbc='#37485D' />
                        <Button name='초기화' br='4px' mr='4px' ml='4px' width='72px' height='40px' hbc='#37485D' />
                        <Button name='코드 실행' br='4px' mr='4px' ml='4px' width='91px' height='40px' hbc='#37485D' />
                        <Button name='제출 후 채점하기' br='4px' mr='4px' ml='4px' width='140px' bc='#0078ff' height='40px' hbc='#0053f4' />
                    </div>
                </div>
            </div>
        </div>
    );
}
