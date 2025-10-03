import GitHub from '@auth/core/providers/github';
import Authentik from '@auth/core/providers/authentik';
import { defineConfig } from 'auth-astro';

export default defineConfig({
  providers: [
    GitHub({
      clientId: import.meta.env.AUTH_GITHUB_ID,
      clientSecret: import.meta.env.AUTH_GITHUB_SECRET,
    }),
    Authentik({
      clientId: import.meta.env.AUTH_AUTHENTIK_ID,
      clientSecret: import.meta.env.AUTH_AUTHENTIK_SECRET,
      issuer: import.meta.env.AUTH_AUTHENTIK_ISSUER
    })
  ],
});