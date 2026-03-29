import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import reactPlugin from "eslint-plugin-react";


export default defineConfig([
  {
    files: ["**/*.{js,ts,jsx,tsx}"],
    plugins: {
      js,
      react: reactPlugin
    },
    settings: {
      react: {
        version: "detect"
      }
    },
    extends: ["js/recommended"],
    languageOptions: { 
      globals: { ...globals.browser, ...globals.node } 
    }
  },
  tseslint.configs.recommended,
  reactPlugin.configs.flat.recommended,
  {
    rules: {
      "react/react-in-jsx-scope": "off"
    }
  }
]);
