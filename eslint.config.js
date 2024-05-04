import globals from "globals";
import path from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import pluginJs from "@eslint/js";
import importPlugin from "eslint-plugin-import";

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
   baseDirectory: __dirname,
   recommendedConfig: pluginJs.configs.recommended,
});

export default [
   {
      env: {
         es6: true,
         node: true,
      },
      languageOptions: {
         globals: {
            ...globals.node,
            ...globals.jest,
         },
         parserOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
         },
      },
      extends: ["eslint:recommended", "airbnb-base"],
      plugins: { import: importPlugin },
      rules: {
         ...importPlugin.configs.recommended.rules,
      },
   },
   ...compat.extends("airbnb-base"),
   {
      rules: {
         indent: ["error", 2],
         "linebreak-style": ["error", "unix"],
         quotes: ["error", "single"],
         semi: ["error", "always"],
         "no-underscore-dangle": [
            "error",
            {
               allow: ["__filename", "__dirname"],
            },
         ],
         "no-console": "off",
         "import/extensions": "off",
         "import/no-named-as-default": "off",
         "import/no-named-as-default-member": "off",
         "import/no-extraneous-dependencies": "off",
      },
   },
];
