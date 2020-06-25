const express = require('express')
const router = express.Router()

// Endpoints
router.get('/', (req, res) => {
    res.render('flights/flights-form')
})

router.get('/resultados', (req, res) => {
    res.send(`Enviarías a la BBDD como origen ${req.query.from}, como destino ${req.query.to}, para ${req.query.adults} personas`)
})

module.exports = router