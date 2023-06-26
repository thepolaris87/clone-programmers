/// <reference types="vite/client" />

declare module '*.md';

declare module '*.svg' {
    import * as React from 'react';

    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;
}

declare module '@pity/vite-plugin-react-markdown';
