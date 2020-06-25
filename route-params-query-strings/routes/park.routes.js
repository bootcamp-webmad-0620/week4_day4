const express = require('express')
const router = express.Router()

router.get('/', (req, res) => res.send('Inicio del paque'))
router.get('/horarios', (req, res) => res.send('Horarios del parque'))
router.get('/temporadas', (req, res) => res.send('Tempordaas del parque'))

module.exports = router