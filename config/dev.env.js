var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

let baseUrl = "a.wunderlist.com/api/v1";



module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  baseUrl
})

