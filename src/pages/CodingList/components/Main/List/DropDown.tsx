import { useState } from 'react';
import Dropdown from '../../Dropdown';
import { level, lang, test } from '@/pages/CodingList/data';

export default function DropDown() {
    const [levelDropdown, setLevelDropdown] = useState<boolean>(false);
    const [langDropdown, setLangDropdown] = useState<boolean>(false);
    const [testDropdown, setTestDropdown] = useState<boolean>(false);

    return (
        <div className="flex gap-[0.5rem]">
            <Dropdown visibility={levelDropdown} array={level} onClick={() => setLevelDropdown(!levelDropdown)} title="난이도" style="w-[140px]" />
            <Dropdown visibility={langDropdown} array={lang} onClick={() => setLangDropdown(!langDropdown)} title="언어" style="w-[140px]" />
            <Dropdown
                visibility={testDropdown}
                array={test}
                onClick={() => setTestDropdown(!testDropdown)}
                title="기출문제 모음"
                style="min-w-[159px] max-w-[249x]"
            />
        </div>
    );
}
