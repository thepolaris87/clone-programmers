import { logo } from '../../../assets/images/codingTest';

export const Navbar = () => {
    return (
        <div className='flex flex-wrap relative w-[100%] h-[46px] justify-between items-center bg-[#0c151c] px-[1rem] py-[0.375rem]'>
            <span className='flex items-center'>
                <img className='w-[24px] mr-[1rem]' src={logo} />
                <span className='flex whitespace-nowrap p-[6px_0px]'>
                    <a className='hidden text-[#98a8b9] text-[14px] mr-[4px] hover:text-white md:block' href='#'>
                        코딩테스트 연습
                    </a>
                    <a className='hidden text-[#98a8b9] text-[14px] mx-[4px] md:block' href='#'>
                        {'>'}
                    </a>
                    <a className='hidden text-[#98a8b9] text-[14px] mx-[4px] hover:text-white md:block' href='#'>
                        연습문제
                    </a>
                    <a className='hidden text-[#98a8b9] text-[14px] mx-[4px] md:block' href='#'>
                        {'>'}
                    </a>
                    <a className='text-[#ffffff] text-[14px] mx-[4px] font-[600] cursor-text' href='#'>
                        귤 고르기
                    </a>
                </span>
            </span>
            <span className='whitespace-nowrap'>
                <a className='hidden text-[#b2c0cc] text-[16px] font-[500] p-[4px_8px] hover:text-white md:block' href='#'>
                    컴파일 옵션
                </a>
            </span>
        </div>
    );
};
