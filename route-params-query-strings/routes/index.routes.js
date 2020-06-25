const express = require('express')
const router = express.Router()

// Base URLs
router.use('/', require('./base.routes.js'))

module.exports = router