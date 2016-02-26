# eslint-config-agco

## Usage

### eslint-config-agco

Our default export contains all of our ESLint rules, including EcmaScript 6+. 
It requires `eslint`.

1. `npm install --save-dev eslint-config-agco eslint`
2. add `"extends": "agco"` to your .eslintrc

### eslint-config-agco/configurations/es5

Lints ES5 and below. Requires `eslint`.

1. `npm install --save-dev eslint-config-agco eslint`
2. add `"extends": "agco/configurations/es5"` to your .eslintrc


See [AGCO's JavaScript style guide](https://github.com/agco/agco-codestyle) and
the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.

## Improving this config

You can make sure this module lints with itself using `npm run lint`.
