import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Product } from "./product.model";

@Controller('products')
export class ProductsController {

    products: Product[] = [
        new Product("BOOK01", "Book 01", 29.90),
        new Product("BOOK02", "Book 02", 32.90),
        new Product("BOOK03", "Book 03", 33.33)
    ]

    @Get()
    getAll(): Product[] {
        return this.products;
    }

    @Get(':id')
    getProduct(@Param() params): Product {
        return this.products[0];
    }

    @Post()
    create(@Body() product: Product) {
        product.id = 100;
        this.products.push(product);
    }

    @Put()
    edit(@Body() product: Product): Product {
        return product;
    }

    @Delete(':id')
    delete(@Param() params) {
        this.products.pop();
    }
}