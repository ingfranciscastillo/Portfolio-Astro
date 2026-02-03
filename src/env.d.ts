/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly PUBLIC_TURNSTILE_SITE_KEY: string;
  readonly TURNSTILE_SECRET_KEY: string;
  readonly BREVO_API_KEY: string;
  readonly SENDER_EMAIL: string;
  readonly SENDER_NAME: string;
  readonly RECIPIENT_EMAIL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}