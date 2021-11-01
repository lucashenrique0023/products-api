import { Injectable } from "@nestjs/common";
import { Book } from "./book.model";

@Injectable()
export class BookService {

    books: Book[] = [
        new Book("BOOK01", "Book 01", 29.90),
        new Book("BOOK02", "Book 02", 32.90),
        new Book("BOOK03", "Book 03", 33.33)
    ]

    getAll(): Book[] {
        return this.books;
    }

    getById(id: number): Book {
        return this.books[0];
    }

    add(book: Book) {
        this.books.push(book);
    }

    edit(book: Book): Book {
        return book;
    }

    delete(id: number) {
        this.books.pop();
    }

}