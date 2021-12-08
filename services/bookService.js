import Book from '../models/models.js'

class BookService {
    async getAll() {
        const books = await Book.find()
        return books
    }
}

export default new BookService