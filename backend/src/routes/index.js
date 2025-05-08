const express = require('express')
const getMarket = require('../controllers/market.controllers')
const topGainer = require('../controllers/gainer.controllers')
const topLoser = require('../controllers/loser.controllers')


const router = express.Router()

router.get('/:id/market_chart',getMarket)

router.get('/gain',topGainer)

router.get('/lose',topLoser)

module.exports = router