/*
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.json({
        'title': 'NodeJS start page',
        'products': 'products'
    });
});

module.exports = router;*/
const noteRoutes = require('./note_routes');
module.exports = function(app, db) {
  noteRoutes(app, db);
  // Тут, позже, будут и другие обработчики маршрутов 
};