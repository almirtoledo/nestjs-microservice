import { join } from 'node:path';
import { cwd } from 'node:process';
import { defaultExclude, defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
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
});
