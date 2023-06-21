import { useAtomValue } from 'jotai';
import DropDown from './DropDown';
import Table from './Table';
import { listDataAtom } from '@/atoms/user';

export default function List() {
    const listData = useAtomValue(listDataAtom);
    return (
        <>
            <DropDown />
            <div className="flex justify-between pt-[1.5rem]">
                <div className="font-extrabold">{listData.length}문제</div>
                <div>
                    <button>최신순</button>
                    <ul></ul>
                </div>
            </div>
            <div className="border border-list_border rounded-md mt-[1rem]">
                <Table />
            </div>
        </>
    );
}
