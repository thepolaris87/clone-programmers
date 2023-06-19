import Editor, { useMonaco } from '@monaco-editor/react';
import { useEffect } from 'react';

export const Code = () => {
    const monaco = useMonaco();

    useEffect(() => {
        if (!monaco) return;
        monaco.editor.defineTheme('code-theme', {
            base: 'vs',
            inherit: true,
            rules: [],
            colors: {
                'editor.background': '#e9ecf3'
            }
        });
        monaco.editor.setTheme('code-theme');
    }, [monaco]);

    return (
        <div className="h-[400px] p-[20px_24px] bg-[#e9ecf3] rounded-[4px]">
            <Editor
                language="javascript"
                theme="code-theme"
                value="function solution(number) {
    var answer = 0;
    function check(n, num, idx) {
        if (n === 3) {
            if (num === 0) {
                answer += 1;
            }
            return;
        }
        for (idx; idx < number.length; idx++) {
            check(n + 1, num + number[idx], idx + 1);
        }
    }
    check(0, 0, 0);
    return answer;
}"
                options={{ fontSize: 14, readOnly: true, minimap: { enabled: false }, scrollbar: { vertical: 'auto', horizontal: 'auto' } }}
            />
        </div>
    );
};
