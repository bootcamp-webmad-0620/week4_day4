const express = require('express')
const router = express.Router()

router.get('/', (req, res) => res.render('index'))

router.get('/:category/autor/:author', (req, res) => {

    // Los ROUTE PARAMS se almacenan en el objeto req.params
    console.log('Los route params se almacenan en el objeto req.params:', req.params)

    // Los QUERY STRINGS se almacenan en el objeto req.query
    console.log('Los query strings se almacenan en el objeto req.query:', req.query)

    res.send('¡Mira la consola!')
})


router.get('/libros/detalles/:id', (req, res) => {

    res.send('El id del libro que mandarías a la BBDD en la query es: ' + req.params.id)
})

module.exports = router