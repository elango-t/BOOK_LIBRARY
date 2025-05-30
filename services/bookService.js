const Book = require('../models/books');

class BookService {
    async getAllBooks() {
        return await Book.find();
    }

    async getBookByAuthor(author) {
        return await Book.find({ author: { $regex: new RegExp(author, 'i') } });
    }

    async createBook(title, author,description,image,pages) {
        const newBook = new Book({ title, author,description,image,pages });
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