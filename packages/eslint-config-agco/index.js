'use strict';

module.exports = {
  extends: [
    'agco/configurations/es6',
    'agco/configurations/react'
  ].map(require.resolve),
  rules: {}
};
