import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Book } from "./book.model";

@Injectable()
export class BookService {

    constructor(
        @InjectModel(Book)
        private bookModel: typeof Book
    ) {}

    async findAll(): Promise<Book[]> {
        return this.bookModel.findAll();
    }

    async findById(id: number): Promise<Book> {
        return this.bookModel.findByPk(id);
    }

    async create(book: Book) {
        this.bookModel.create(book);
    }

    async update(book: Book): Promise<[number, Book[]]> {
        return this.bookModel.update(book, {
            where: {
                id: book.id
            }
        });
    }

    async delete(id: number) {
        const book: Book = await this.findById(id);
        book.destroy();
    }

}