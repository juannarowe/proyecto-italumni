import { defineConfig } from 'vite';
import { resolve } from 'path';
export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                xarxa: resolve(__dirname, 'pages/xarxa/index.html'),
                signup: resolve(__dirname, 'pages/signup/index.html'),
                jobs: resolve(__dirname, 'pages/jobs/index.html'),
                events: resolve(__dirname, 'pages/events/index.html'),
            },
        },
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
        },
    },
});
//# sourceMappingURL=vite.config.js.map