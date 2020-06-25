const express = require('express')
const router = express.Router()

const Book = require('./../models/book.model')

// Endpoints
router.get('/listado', (req, res) => {

    Book.find()
        .then(allBooks => res.render('books/list', { allBooks }))
        .catch(err => console.log("Error en la BBDD", err))
})


router.get('/detalle/:id', (req, res) => {

    Book.findById(req.params.id)
        .then(theBook => res.render('books/details', theBook))
        .catch(err => console.log("Error en la BBDD", err))
})

module.exports = router
