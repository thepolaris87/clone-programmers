import Editor, { useMonaco } from '@monaco-editor/react';
import { useEffect } from 'react';

export const Code = ({ content }: { content?: string }) => {
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
                value={content}
                options={{ fontSize: 14, readOnly: true, minimap: { enabled: false }, scrollbar: { vertical: 'auto', horizontal: 'auto' } }}
            />
        </div>
    );
};
