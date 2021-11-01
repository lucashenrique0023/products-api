import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Product } from "./product.model";
import { ProductService } from "./product.service";

@Controller('products')
export class ProductsController {

    constructor(private productService: ProductService) {}

    @Get()
    getAll(): Product[] {
        return this.productService.getAll();
    }

    @Get(':id')
    getProduct(@Param() params): Product {
        return this.productService.getById(params.id);
    }

    @Post()
    create(@Body() product: Product) {
        product.id = 100;
        return this.productService.add(product);
    }

    @Put()
    edit(@Body() product: Product): Product {
        return this.productService.edit(product);
    }

    @Delete(':id')
    delete(@Param() params) {
        this.productService.delete(params.id);
    }
}