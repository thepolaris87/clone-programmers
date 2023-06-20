import { logo } from '@/assets/images/codingTest';

export const Navbar = ({ setModal }: { setModal?: (modal: boolean) => void }) => {
    return (
        <div className="flex flex-wrap relative w-[100%] justify-between items-center bg-[#0c151c] p-[6px_16px]">
            <span className="flex items-center">
                <img className="w-[24px] mr-[16px]" src={logo} />
                <span className="flex whitespace-nowrap p-[6px_0px]">
                    <a className="hidden text-[#98a8b9] text-[14px] mr-[4px] hover:text-white md:block" href="/learn/challenges">
                        코딩테스트 연습
                    </a>
                    <a className="hidden text-[#98a8b9] text-[14px] mx-[4px] md:block" href="#">
                        {'>'}
                    </a>
                    <a className="hidden text-[#98a8b9] text-[14px] mx-[4px] hover:text-white md:block" href="#">
                        연습문제
                    </a>
                    <a className="hidden text-[#98a8b9] text-[14px] mx-[4px] md:block" href="#">
                        {'>'}
                    </a>
                    <a className="text-[#ffffff] text-[14px] mx-[4px] font-[600] cursor-text" href="#">
                        귤 고르기
                    </a>
                </span>
            </span>
            {setModal && (
                <span className="whitespace-nowrap">
                    <a className="hidden text-[#b2c0cc] text-[16px] font-[500] p-[4px_8px] hover:text-white md:block" href="#" onClick={() => setModal(true)}>
                        컴파일 옵션
                    </a>
                </span>
            )}
        </div>
    );
};
