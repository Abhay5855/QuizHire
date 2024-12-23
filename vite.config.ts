import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig, PluginOption } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';

export default defineConfig({
	plugins: [TanStackRouterVite() as PluginOption, react(), tsconfigPaths()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
});
