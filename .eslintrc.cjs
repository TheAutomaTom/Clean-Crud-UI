/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {

  root: true,
  "parser": "vue-eslint-parser",

  parserOptions: {
    "parser": "@typescript-eslint/parser",
    "ecmaVersion" : "latest",
    "sourceType": "module"
  },
  
  "extends": [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript"
  ],

  "ignorePatterns": ["node_modules/**", "**/dist/**"],

  "rules": {
		"@typescript-eslint/no-unused-vars": [
      "error",
      {
			"argsIgnorePattern": "^_",
			"varsIgnorePattern": "^_"
      }
		],
		"@typescript-eslint/no-var-requires": "off",
		"@typescript-eslint/consistent-type-imports": "error",
		/**
		 * Having a semicolon helps the optimizer interpret your code correctly.
		 * This avoids rare errors in optimized code.
		 * @see https://twitter.com/alex_kozack/status/1364210394328408066
		 */
		"semi": ["error", "always"],
		/**
		 * This will make the history of changes in the hit a little cleaner
		 */
		"comma-dangle": ["warn", "never"],
		/**
		 * Just for beauty
		 */
		"quotes": [
      "warn",
      "double",
      {
        "avoidEscape": true
      }
		]
	}


  
};
