import Editor, { useMonaco } from '@monaco-editor/react';
import { useEffect } from 'react';

export const Code = ({ content, color, onChange }: { content?: string; color: string; onChange?: (value: string) => void }) => {
    const monaco = useMonaco();

    useEffect(() => {
        if (!monaco) return;
        monaco.editor.defineTheme('code-theme', {
            base: color === '#e9ecf3' ? 'vs' : 'vs-dark',
            inherit: true,
            rules: [],
            colors: {
                'editor.background': color
            }
        });
        monaco.editor.setTheme('code-theme');
    }, [monaco, color]);

    return (
        <Editor
            language="javascript"
            theme="code-theme"
            value={content}
            onChange={(e) => onChange && onChange(e as string)}
            options={{
                fontSize: onChange ? 16 : 14,
                readOnly: onChange ? false : true,
                minimap: { enabled: false },
                scrollbar: { vertical: 'auto', horizontal: 'auto' }
            }}
        />
    );
};
