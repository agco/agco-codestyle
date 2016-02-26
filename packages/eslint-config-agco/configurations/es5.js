'use strict';

module.exports = {
  extends: [
    'agco/rules/best-practices',
    'agco/rules/errors',
    'agco/rules/legacy',
    'agco/rules/node',
    'agco/rules/strict',
    'agco/rules/style',
    'agco/rules/variables'
  ],
  env: {
    browser: true,
    node: true,
    amd: false,
    mocha: true,
    jasmine: false
  },
  ecmaFeatures: {},
  globals: {},
  rules: {}
};
