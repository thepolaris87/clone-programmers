import Editor, { Monaco } from '@monaco-editor/react';
import { useCallback } from 'react';

export const Code = ({ content, color, onChange }: { content?: string; color: string; onChange?: (value: string) => void }) => {
    const beforeMount = useCallback(
        (monaco: Monaco) => {
            monaco?.editor.defineTheme('code-theme', {
                base: color === '#e9ecf3' ? 'vs' : 'vs-dark',
                inherit: true,
                rules: [],
                colors: { 'editor.background': color }
            });
            monaco?.editor.setTheme('code-theme');
        },
        [color]
    );

    return (
        <Editor
            language="javascript"
            theme="code-theme"
            value={content}
            onChange={(e) => onChange?.(e as string)}
            beforeMount={beforeMount}
            options={{
                fontSize: onChange ? 16 : 14,
                readOnly: onChange ? false : true,
                minimap: { enabled: false },
                scrollbar: { vertical: 'auto', horizontal: 'auto' }
            }}
        />
    );
};
