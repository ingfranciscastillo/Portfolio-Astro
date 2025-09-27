import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  experimental: {
    fonts: [
      {
        provider: fontProviders.fontshare(),
        name: "Satoshi",
        cssVariable: "--font-satoshi",
      },
    ],
  },

  integrations: [react()],
});