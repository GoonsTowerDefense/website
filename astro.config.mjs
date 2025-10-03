// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import auth from 'auth-astro';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [auth()],
  adapter: cloudflare(),
  output: 'static',
  image: {
    service: passthroughImageService()
  }
});