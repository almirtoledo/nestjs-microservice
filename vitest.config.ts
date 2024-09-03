import { join } from 'node:path';
import { cwd } from 'node:process';
import swc from 'unplugin-swc';
import { defaultExclude, defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    root: './',
    exclude: [
      ...defaultExclude,
      '**/mariadb/**',
      '**/mongodb/**',
      '**/kafka/**"',
      '**/valkey/**',
    ],
    alias: [
      {
        find: '@',
        replacement: join(cwd(), 'src'),
      },
    ],
  },
  plugins: [
    swc.vite({
      module: { type: 'es6' },
    }),
  ],
});