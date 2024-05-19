import baseConfig, { restrictEnvAccess } from "@repo/eslint-config/base";
import reactConfig from "@repo/eslint-config/react";
import viteConfig from "@repo/eslint-config/vite";

/** @type {import('typescript-eslint').Config} */
export default [
  { ignores: ["dist/**"] },
  ...baseConfig,
  ...reactConfig,
  ...viteConfig,
  ...restrictEnvAccess,
];
