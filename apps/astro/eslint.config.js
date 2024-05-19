import astroConfig from "@repo/eslint-config/astro";
import baseConfig, { restrictEnvAccess } from "@repo/eslint-config/base";
import reactConfig from "@repo/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".astro/**", "dist"],
  },
  ...baseConfig,
  ...reactConfig,
  ...astroConfig,
  ...restrictEnvAccess,
];
