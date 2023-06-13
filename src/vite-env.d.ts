/// <reference types="vite/client" />

declare module '*.md';

declare module '*.svg' {
    import React from 'react';

    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
}
