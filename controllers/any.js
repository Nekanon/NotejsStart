var express = require('express')
var router = express.Router()

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

router.get('/', function(req, res) {
    res.json({'data': 'Any home page'})
})

router.get('/about', function(req, res) {
    res.json({'data': 'About any'})
})

module.exports = router