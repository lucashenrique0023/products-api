import { Injectable } from "@nestjs/common";
import { Product } from "./product.model";

@Injectable()
export class ProductService {

    products: Product[] = [
        new Product("BOOK01", "Book 01", 29.90),
        new Product("BOOK02", "Book 02", 32.90),
        new Product("BOOK03", "Book 03", 33.33)
    ]

    getAll(): Product[] {
        return this.products;
    }

    getById(id: number): Product {
        return this.products[0];
    }

    add(product: Product) {
        this.products.push(product);
    }

    edit(product: Product): Product {
        return product;
    }

    delete(id: number) {
        this.products.pop();
    }

}