import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

@Controller('products')
export class ProductsController {

    @Get()
    getAll(): String {
        return 'List of all products';
    }

    @Get(':id')
    getProduct(@Param() params): String {
        return `Return product data ${params.id}`;
    }

    @Post()
    create(@Body() product): String {
        console.log(product);
        return 'Product created.';
    }

    @Put()
    edit(@Body() product): String {
        console.log(product);
        return 'Product Modified.';
    }

    @Delete(':id')
    delete(@Param() params): String {
        return `Product ${params.id} removed.`
    }
}