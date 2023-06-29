import { useMemo, useState } from 'react';
import Dropdown from './Dropdown';
import { useQueryClient } from 'react-query';
import { useAtom } from 'jotai';
import { filterAtom } from '@/pages/CodingList/atoms';

const initialDropdown = { level: false, test: false };

export default function DropDownMenu() {
    const queryClinet = useQueryClient();
    const listData = queryClinet.getQueryData<TListData>(['questions']);
    const [dropdown, setDropDown] = useState(initialDropdown);
    const [filters, setFilters] = useAtom(filterAtom);
    const filterList = useMemo(() => {
        const list = listData?.questions;
        const level = Array.from(new Set(list?.map((q) => `Lv.${q.difficulty}`).sort()));
        const test = Array.from(new Set(list?.map((q) => q.category)));
        return { level, test };
    }, [listData]);

    const onDropDownClick = (type: 'level' | 'test') => {
        setDropDown({ ...initialDropdown, [type]: !dropdown[type] });
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
        if (e.target.checked) {
            if (e.target.value === 'level') setFilters({ ...filters, level: [...filters.level, name] });
            if (e.target.value === 'test') setFilters({ ...filters, test: [...filters.test, name] });
        } else {
            if (e.target.value === 'level') setFilters({ ...filters, level: [...filters.level.filter((f) => f !== name)] });
            if (e.target.value === 'test') setFilters({ ...filters, test: [...filters.test.filter((f) => f !== name)] });
        }
    };

    return (
        <>
            <div className="block lg:flex">
                <div className="flex gap-[0.5rem] mb-[0.5rem]">
                    <div className="dropdown-menu w-full lg:w-auto min-w-[8.75rem]">
                        <Dropdown
                            visibility={dropdown.level}
                            array={filterList.level}
                            onClick={() => onDropDownClick('level')}
                            title="난이도"
                            style="w-[140px]"
                            value="level"
                            onChange={onChange}
                        />
                    </div>
                    <div className="w-full lg:w-auto min-w-[8.75rem]">
                        <Dropdown
                            visibility={dropdown.test}
                            array={filterList.test}
                            onClick={() => onDropDownClick('test')}
                            title="기출문제 모음"
                            style="min-w-[159px] max-w-[249x]"
                            value="test"
                            onChange={onChange}
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap gap-1">
                {filters.level.map((f) => (
                    <button key={f} className="border rounded bg-[#44576c] px-2 pt-1 pb-0.5 text-white text-xs">
                        {f}
                    </button>
                ))}
                {filters.test.map((f) => (
                    <button key={f} className="border rounded bg-[#44576c] px-2 pt-1 pb-0.5 text-white text-xs">
                        {f}
                    </button>
                ))}
            </div>
        </>
    );
}
