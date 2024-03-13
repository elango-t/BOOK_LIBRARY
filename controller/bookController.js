const bookService = require('../services/bookService');

class BookController {
    async getAllBooks(req, res) {
        try {
            const books = await bookService.getAllBooks();
            res.json(books);
        } catch (err) {
            res.status(500).send('Error occurred in getting data from database' + err);
        }
    }

    async getBookById(req, res) {
        try {
            const book = await bookService.getBookById(req.params.id);
            if (!book) return res.status(404).send('Book not found');
            res.json(book);
        } catch (err) {
            res.status(500).send('Error occurred in getting data from database' + err);
        }
    }

    async createBook(req, res) {
        try {
            const savedBook = await bookService.createBook(req.body.title, req.body.author);
            res.json(savedBook);
        } catch (err) {
            res.status(500).send('Error occurred in creating a new book');
        }
    }

    async updateBook(req, res) {
        try {
            const updatedBook = await bookService.updateBook(req.params.id, req.body);
            if (!updatedBook) return res.status(404).send('Book not found');
            res.json(updatedBook);
        } catch (err) {
            res.status(500).send('Error occurred in updating the book' + err);
        }
    }

    async deleteBook(req, res) {
        try {
            const deletedBook = await bookService.deleteBook(req.params.id);
            if (!deletedBook) return res.status(404).send('Book not found');
            res.json(deletedBook);
        } catch (err) {
            res.status(500).send('Error occurred in deleting the book' + err);
        }
    }
}

module.exports = new BookController()