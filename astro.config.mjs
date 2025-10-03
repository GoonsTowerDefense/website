// @ts-check
import { defineConfig } from 'astro/config';
import auth from 'auth-astro';

import cloudflare from '@astrojs/cloudflare';

import db from '@astrojs/db';

// https://astro.build/config
export default defineConfig({
  integrations: [auth(), db()],
  adapter: cloudflare(),
  output: 'server',
});