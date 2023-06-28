import { toastAtom } from '@/atoms/toast';
import { useSetAtom } from 'jotai';
import classNames from 'classnames';

export const Header = ({ title, onSetMode, mode }: HeaderProps) => {
    const toastMessage = useSetAtom(toastAtom);
    return (
        <section
            className={classNames(
                mode ? 'bg-[#263747] shadow-[0_1px_#172334]' : 'bg-[#f1f4f7] shadow-[0_1px_#cdd8dd]',
                'h-[56px] flex relative px-[16px] justify-between'
            )}
        >
            <h5 className={classNames(mode ? 'text-[white]' : 'text-[#263747]', 'pt-[15px]')}>{title}</h5>
            <span className="flex items-center justify-end h-[48px]">
                <button
                    className={classNames(
                        mode ? 'bg-[#44576c] text-[white]' : 'bg-[#f1f4f7] text-[#44576c] border-[1px] border-[#44576c] hover:text-[white] hover:bg-[#44576c] ',
                        'hidden w-[40px] h-[24px] text-[12px] rounded-[3.2px_0_0_3.2px] md:block'
                    )}
                    onClick={() => onSetMode(true)}
                >
                    <h5>dark</h5>
                </button>
                <button
                    className={classNames(
                        mode
                            ? 'text-[#44576c] hover:text-[white] bg-[#263747] hover:bg-[#44576c] border-[#44576c]'
                            : 'bg-[#44576c] text-[white] border-[#44576c]',
                        'hidden w-[40px] h-[24px] text-[12px] rounded-[0_3.2px_3.2px_0] mr-[-1px] border-[1px] md:block'
                    )}
                    onClick={() => onSetMode(false)}
                >
                    <h5>light</h5>
                </button>
                <button
                    className="hidden w-[59px] h-[24px] text-[12px] text-[white] rounded-[3.2px_0_0_3.2px] bg-[#44576c] ml-[8px] md:block"
                    onClick={() => {
                        toastMessage({ message: 'sublime 모드 준비 중입니다.' });
                    }}
                >
                    <h5>sublime</h5>
                </button>
                <button
                    className={classNames(
                        mode ? 'text-[#44576c] hover:text-[white] bg-[#263747] hover:bg-[#44576c]' : 'text-[#44576c] hover:text-[white] hover:bg-[#44576c]',
                        'hidden w-[34px] h-[24px] text-[12px] mr-[-1px] border-[#44576c] border-[1px] md:block'
                    )}
                    onClick={() => {
                        toastMessage({ message: 'vim 모드 준비 중입니다.' });
                    }}
                >
                    <h5>vim</h5>
                </button>
                <button
                    className={classNames(
                        mode ? 'text-[#44576c] hover:text-[white] bg-[#263747] hover:bg-[#44576c]' : 'text-[#44576c] hover:text-[white] hover:bg-[#44576c]',
                        'hidden w-[51px] h-[24px] text-[12px] mr-[-1px] border-[#44576c] border-[1px] md:block rounded-[0_3.2px_3.2px_0]'
                    )}
                    onClick={() => {
                        toastMessage({ message: 'emacs 모드 준비 중입니다.' });
                    }}
                >
                    <h5>emacs</h5>
                </button>
                <button className="w-[88px] h-[24px] text-[12px] text-[white] rounded-[3.2px] bg-[#44576c] ml-[8px]">
                    <h5>JavaScript</h5>
                </button>
            </span>
        </section>
    );
};
