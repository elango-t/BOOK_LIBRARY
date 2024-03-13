const Book = require('../models/books');

class BookService {
    async getAllBooks() {
        return await Book.find();
    }

    async getBookById(id) {
        return await Book.findById(id);
    }

    async createBook(title, author) {
        const newBook = new Book({ title, author });
        return await newBook.save();
    }

    async updateBook(id, updatedData) {
        const book = await Book.findById(id);
        if (!book) return null;

        book.isbn = updatedData.isbn;
        book.title = updatedData.title;
        book.author = updatedData.author;

        return await book.save();
    }

    async deleteBook(id) {
        return await Book.findByIdAndDelete(id);
    }
}

module.exports = new BookService();