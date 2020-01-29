var express = require('express')
var router = express.Router()

var punishmentRoutes = require('./punishment.js')
var playerdataRoutes = require('./playerdata.js')

router.use('/punishment', punishmentRoutes)
router.use('/playerdata', playerdataRoutes)

module.exports = router