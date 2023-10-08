module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.base.json",
    tsconfigRootDir: __dirname,
  },
  extends: ["prettier", "plugin:react-hooks/recommended"],
  plugins: [
    "@typescript-eslint/eslint-plugin",
    "react",
    "prettier",
    "json-format",
    "simple-import-sort",
  ],
  ignorePatterns: [
    ".eslintrc.js",
    "node_modules",
    ".vscode",
    "dist",
    "src-tauri",
  ],
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { ignoreRestSiblings: true },
    ],
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        prefer: "type-imports",
        disallowTypeAnnotations: false,
      },
    ],
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
        semi: true,
        tabWidth: 2,
        useTabs: false,
        trailingComma: "all",
        printWidth: 80,
        arrowParens: "always",
      },
      {
        usePrettierrc: false,
      },
    ],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
};
