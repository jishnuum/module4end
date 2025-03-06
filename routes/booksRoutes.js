const { adding, listBooks, deleteBooks, listOneBook } = require('../controllers/bookscontroller')

const bookRoutes = require('express').Router()

bookRoutes.post("/books",adding)
bookRoutes.get("/books",listBooks)
bookRoutes.get("/books/:title",listOneBook)
bookRoutes.delete("/books/:title",deleteBooks)

module.exports = (bookRoutes)