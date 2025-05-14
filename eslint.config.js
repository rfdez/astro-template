import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import eslintPluginAstro from "eslint-plugin-astro";
import { defineConfig, globalIgnores } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig([
	globalIgnores([".astro/"]),
	eslint.configs.recommended,
	tseslint.configs.strict,
	tseslint.configs.stylistic,
	eslintPluginAstro.configs.recommended,
	eslintConfigPrettier,
]);
