import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from 'src/dto/products.dtos';
import { Product } from 'src/entities/product.entity';

@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Array<Product> = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description',
      price: 123,
      image: 'image.url',
      stock: 31,
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((item) => item.id === id);
    if(!product) {
      throw new NotFoundException(`Product #${id} doesn't exists`);
    }
    return product;
  }

  create(payload: CreateProductDto) {
    this.counterId++;
    const newProduct: Product = {
      id: this.counterId,
      ...payload,
    };

    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: UpdateProductDto) {
    const existsProduct = this.findOne(id);
    if (!existsProduct) {
      return null;
    }
    const index = this.products.findIndex((item) => item.id === id);
    this.products[index] = { ...existsProduct, ...payload };
    return this.products[index];
  }

  delete(id: number) {
    const product = this.findOne(id);
    const index = this.products.findIndex(item => item.id === id);
    this.products.splice(index, 1);
    return product;
  }
}
