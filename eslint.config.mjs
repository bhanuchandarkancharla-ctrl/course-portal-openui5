import globals from "globals";

export default [
  {
    // Ignore Fiori Tools test-runner boilerplate — references plugin
    // rules (sap-browser-api-warning, sap-no-dom-access) that aren't
    // registered in this config and cause "rule not found" errors.
    ignores: ["webapp/test/**", "dist/**", "node_modules/**"]
  },
  {
    files: ["webapp/**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "script",        // sap.ui.define uses AMD — not ES modules
      globals: {
        ...globals.browser,
        sap: "readonly"
        // COURSES/LESSONS no longer needed — data.js is a proper AMD module now
      }
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "warn",
      "eqeqeq": "error",
      "semi": ["error", "always"],
      "quotes": ["warn", "double"]
    }
  }
];
