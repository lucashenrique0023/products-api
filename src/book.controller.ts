import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Book } from "./book.model";
import { BookService } from "./book.service";

@Controller('books')
export class BookController {

    constructor(private bookService: BookService) {}

    @Get()
    async getAll(): Promise <Book[]> {
        return this.bookService.findAll();
    }

    @Get(':id')
    async getBook(@Param() params): Promise<Book> {
        return this.bookService.findById(params.id);
    }

    @Post()
    async create(@Body() book: Book) {
        book.id = 100;
        return this.bookService.create(book);
    }

    @Put()
    async edit(@Body() book: Book): Promise<[number, Book[]]> {
        return this.bookService.update(book);
    }

    @Delete(':id')
    async delete(@Param() params) {
        this.bookService.delete(params.id);
    }
}