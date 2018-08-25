// https://eslint.org/docs/user-guide/configuring

module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    "eslint:recommended",
    "plugin:vue/essential"
  ],
  plugins: ["vue", "html"],
  // add your custom rules here
  rules: {
    "comma-dangle": ["error", "only-multiline"],
    // indent: 'off',
    //"linebreak-style": 0,
    "max-len": [0],

    // console.log error will be turn off by this
    "no-console": "off",

    // http://eslint.org/docs/rules/no-underscore-dangle   Unexpected dangling '_' in '_data'
    "no-underscore-dangle": "off",
    // don't require .vue extension when importing
    // 'import/extensions': [
    //   'error',
    //   'always',
    //   {
    //     js: 'never',
    //     vue: 'never',
    //   },
    // ],
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    "no-param-reassign": [
      "error",
      {
        props: true,
        ignorePropertyModificationsFor: [
          "state", // for vuex state
          "acc", // for reduce accumulators
          "e" // for e.returnvalue
        ]
      }
    ]
    // allow optionalDependencies
  }
};
