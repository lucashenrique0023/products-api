import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Book } from "./book.model";
import { BookService } from "./book.service";

@Controller('books')
export class BookController {

    constructor(private bookService: BookService) {}

    @Get()
    getAll(): Book[] {
        return this.bookService.getAll();
    }

    @Get(':id')
    getBook(@Param() params): Book {
        return this.bookService.getById(params.id);
    }

    @Post()
    create(@Body() book: Book) {
        book.id = 100;
        return this.bookService.add(book);
    }

    @Put()
    edit(@Body() book: Book): Book {
        return this.bookService.edit(book);
    }

    @Delete(':id')
    delete(@Param() params) {
        this.bookService.delete(params.id);
    }
}