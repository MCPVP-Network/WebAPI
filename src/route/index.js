var express = require('express')
var router = express.Router()

var playersRoutes = require('./player')
// var serversRoutes = require('./servers')

router.use('/player', playersRoutes)
// router.use('/server', serversRoutes)

module.exports = router