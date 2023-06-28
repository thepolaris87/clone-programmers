import Editor, { Monaco } from '@monaco-editor/react';
import { useCallback, useRef, useEffect, useMemo } from 'react';

export const Code = ({ content, color, onChange }: { content?: string; color: string; onChange?: (value: string) => void }) => {
    const monacoRef = useRef<Monaco>();
    const colors = useMemo(() => ['#e9ecf3', '#ffffff'], []);

    const beforeMount = useCallback(
        (monaco: Monaco) => {
            monaco?.editor.defineTheme('code-theme', {
                base: colors.includes(color) ? 'vs' : 'vs-dark',
                inherit: true,
                rules: [],
                colors: { 'editor.background': color }
            });
            monaco?.editor.setTheme('code-theme');
            monacoRef.current = monaco;
        },
        [color, colors]
    );

    useEffect(() => {
        if (monacoRef.current) beforeMount(monacoRef.current);
    }, [beforeMount, color]);

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
                scrollBeyondLastLine: false,
                scrollbar: { vertical: 'auto', horizontal: 'auto' }
            }}
        />
    );
};
