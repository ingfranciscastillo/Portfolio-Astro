// @ts-check
import { defineConfig } from "astro/config";

import { resolve } from "node:path";

import tailwind from "@astrojs/tailwind";
import { shield } from "@kindspells/astro-shield";

const rootDir = new URL(".", import.meta.url).pathname;
const modulePath = resolve(rootDir, "src", "generated", "sriHashes.mjs");

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    shield({
      sri: {
        hashesModule: modulePath,
      },
    }),
  ],
});
