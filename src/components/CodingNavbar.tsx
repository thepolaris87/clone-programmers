import { logo } from '../assets/codingTest';

export const CodingNavbar = () => {
    return (
        <>
            <div className='flex flex-wrap relative w-[100%] h-[46px] justify-between items-center bg-[#0c151c] px-[1rem] py-[0.375rem]'>
                <div className='flex items-center'>
                    <img className='w-[24px] mr-[1rem]' src={logo} />
                    <div className='flex whitespace-nowrap p-[6px_0px]'>
                        <a className='text-[#98a8b9] text-[14px] mr-[4px] hover:text-white' href='#'>
                            코딩테스트 연습
                        </a>
                        <a className='text-[#98a8b9] text-[14px] mx-[4px]' href='#'>
                            {'>'}
                        </a>
                        <a className='text-[#98a8b9] text-[14px] mx-[4px] hover:text-white' href='#'>
                            코딩 기초 트레이닝
                        </a>
                        <a className='text-[#98a8b9] text-[14px] mx-[4px]' href='#'>
                            {'>'}
                        </a>
                        <a className='text-[#ffffff] text-[14px] mx-[4px] font-[600] cursor-text' href='#'>
                            문자열 출력하기
                        </a>
                    </div>
                </div>
                <div className='flex whitespace-nowrap'>
                    <a className='text-[#b2c0cc] text-[16px] font-[500] p-[4px_8px] hover:text-white' href='#'>
                        도움말
                    </a>
                    <a className='text-[#b2c0cc] text-[16px] font-[500] p-[4px_8px] hover:text-white' href='#'>
                        컴파일 옵션
                    </a>
                </div>
            </div>
        </>
    );
};
