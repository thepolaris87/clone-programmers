import { useState } from 'react';
import Dropdown from './Dropdown';
import { level, lang, test } from '@/pages/CodingList/data';

export default function DropDown() {
    const [levelDropdown, setLevelDropdown] = useState<boolean>(false);
    const [langDropdown, setLangDropdown] = useState<boolean>(false);
    const [testDropdown, setTestDropdown] = useState<boolean>(false);

    return (
        <div className="block lg:flex gap-[0.5rem]">
            <div className="flex gap-[0.5rem] mb-[0.5rem] lg:w-1/2">
                <div className="w-1/2">
                    <Dropdown visibility={levelDropdown} array={level} onClick={() => setLevelDropdown(!levelDropdown)} title="난이도" style="w-[140px]" />
                </div>
                <div className="w-1/2 ">
                    <Dropdown visibility={langDropdown} array={lang} onClick={() => setLangDropdown(!langDropdown)} title="언어" style="w-[140px]" />
                </div>
            </div>
            <div className="w-full lg:w-1/4">
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
