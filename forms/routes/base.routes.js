const express = require('express')
const router = express.Router()

// Endpoints
router.get('/', (req, res) => {
    res.render('index')
})

router.get('/login', (req, res) => {
    res.render('auth/login-form')
})

router.post('/login', (req, res) => {
    // Los datos de las peticiones de tipo POST se almacenan en req.body
    res.send(`Eviarías a la BBDD ${req.body.username} y ${req.body.pwd}`)
})

module.exports = router
