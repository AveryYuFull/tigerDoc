'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
const fileData = require('../build/pre-init');

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
}, {
    pageModules: `${fileData.pageModules}`
});
