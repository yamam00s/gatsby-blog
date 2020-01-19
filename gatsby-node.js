'use strict'
require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'esnext',
  },
})

exports.onCreateNode = require('./gatsby-node/onCreateNode').onCreateNode
exports.createPages = require('./gatsby-node/createPages').createPages
