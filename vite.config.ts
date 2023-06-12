import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Markdown from '@pity/vite-plugin-react-markdown';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), Markdown(), svgr(), tsconfigPaths()]
    // assetsInclude: ['**/*.md']
});
