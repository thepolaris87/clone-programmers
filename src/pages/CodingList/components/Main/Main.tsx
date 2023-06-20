import Carousel from '../Carousel';
import { nameAtom, tokenAtom } from '@/atoms/user';
import { useAtomValue } from 'jotai';
import Aside from './Aside/Aside';
import List from './List/List';

export default function Main() {
    const token = useAtomValue(tokenAtom);
    const name = useAtomValue(nameAtom);
    console.log(token, name);
    return (
        <>
            <Carousel />
            <div>
                <div className="flex gap-[2rem] pt-[3rem] w-full justify-center box-border ">
                    <div className="flex max-w-[75rem] w-full gap-[2rem]">
                        <div className="w-2/3">
                            <List />
                            {/* <Pagination onClickPage={} totalNum={5} /> */}
                        </div>
                        <Aside />
                    </div>
                </div>
            </div>
        </>
    );
}
