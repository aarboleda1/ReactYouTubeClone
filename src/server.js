const path = require('path')
const express = require('express')

module.exports = {
  App: function () {
    const app = express()
    const indexPath = path.join(__dirname, '/../index.html')
    const publicPath = express.static(path.join(__dirname, '../public'))

    App.use('/public', publicPath)
    App.get('/', function (_, res) { res.sendFile(indexPath) })

    return app
  }
}

//in this file we wil export tghe express server 