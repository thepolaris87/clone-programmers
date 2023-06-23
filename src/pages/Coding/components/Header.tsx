import { toastAtom } from '@/atoms/toast';
import { useSetAtom } from 'jotai';

export const Header = ({ title }: { title: string }) => {
    const toastMessage = useSetAtom(toastAtom);
    return (
        <section className="h-[56px] flex relative bg-[#263747] px-[16px] justify-between shadow-[0_1px_#172334]">
            <h5 className="text-[white] pt-[15px]">{title}</h5>
            <span className="flex items-center justify-end h-[48px]">
                <button className="hidden w-[40px] h-[24px] text-[12px] text-[white] rounded-[3.2px_0_0_3.2px] bg-[#44576c] md:block">
                    <h5 className="mt-1">dark</h5>
                </button>
                <button
                    className="hidden w-[40px] h-[24px] text-[12px] text-[#44576c] hover:text-[white] bg-[#263747] hover:bg-[#44576c] rounded-[0_3.2px_3.2px_0] mr-[-1px] border-[#44576c] border-[1px] md:block"
                    onClick={() => {
                        toastMessage({ message: 'light 모드 준비 중입니다.' });
                    }}
                >
                    <h5 className="mt-1">light</h5>
                </button>
                <button
                    className="hidden w-[59px] h-[24px] text-[12px] text-[white] rounded-[3.2px_0_0_3.2px] bg-[#44576c] ml-[8px] md:block"
                    onClick={() => {
                        toastMessage({ message: 'sublime 모드 준비 중입니다.' });
                    }}
                >
                    <h5 className="mt-1">sublime</h5>
                </button>
                <button
                    className="hidden w-[34px] h-[24px] text-[12px] text-[#44576c] hover:text-[white] bg-[#263747] hover:bg-[#44576c] mr-[-1px] border-[#44576c] border-[1px] md:block"
                    onClick={() => {
                        toastMessage({ message: 'vim 모드 준비 중입니다.' });
                    }}
                >
                    <h5 className="mt-1">vim</h5>
                </button>
                <button
                    className="hidden w-[51px] h-[24px] text-[12px] text-[#44576c] hover:text-[white] bg-[#263747] hover:bg-[#44576c] rounded-[0_3.2px_3.2px_0] mr-[-1px] border-[#44576c] border-[1px] md:block"
                    onClick={() => {
                        toastMessage({ message: 'emacs 모드 준비 중입니다.' });
                    }}
                >
                    <h5 className="mt-1">emacs</h5>
                </button>
                <button className="w-[88px] h-[24px] text-[12px] text-[white] rounded-[3.2px] bg-[#44576c] ml-[8px]">
                    <h5 className="mt-1">JavaScript</h5>
                </button>
            </span>
        </section>
    );
};
