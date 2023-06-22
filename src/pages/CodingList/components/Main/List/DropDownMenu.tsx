import { useEffect, useState } from 'react';
import Dropdown from './Dropdown';
import { level, lang, test } from '@/pages/CodingList/data';

export default function DropDown() {
    const [levelDropdown, setLevelDropdown] = useState<boolean>(false);
    const [langDropdown, setLangDropdown] = useState<boolean>(false);
    const [testDropdown, setTestDropdown] = useState<boolean>(false);

    useEffect(() => {}, []);

    return (
        <div className="block lg:flex gap-[0.5rem]">
            <div className="flex gap-[0.5rem] mb-[0.5rem]">
                <div className="w-full lg:w-auto min-w-[8.75rem]">
                    <Dropdown visibility={levelDropdown} array={level} onClick={() => setLevelDropdown(!levelDropdown)} title="난이도" style="w-[140px]" />
                </div>
                <div className="w-full lg:w-auto min-w-[8.75rem]">
                    <Dropdown visibility={langDropdown} array={lang} onClick={() => setLangDropdown(!langDropdown)} title="언어" style="w-[140px]" />
                </div>
            </div>
            <div className="w-full lg:w-auto min-w-[8.75rem]">
                <Dropdown
                    visibility={testDropdown}
                    array={test}
                    onClick={() => setTestDropdown(!testDropdown)}
                    title="기출문제 모음"
                    style="min-w-[159px] max-w-[249x]"
                />
            </div>
        </div>
    );
}
