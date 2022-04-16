import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from '../../entities/product.entity';
import { CreateProductDto } from '../../DTOs/products.dto';

@Injectable()
export class ProductsService {
  private counterId = 2;

  private products: Product[] = [
    {
      id: 1,
      name: 'A',
      description: 'A description',
      price: 10,
      image: 'https://assets/images/product1.jpg',
      stock: 100,
    },
    {
      id: 2,
      name: 'B',
      description: 'B description',
      price: 10,
      image: 'https://assets/images/product1.jpg',
      stock: 100,
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((product) => product.id === id);
    if (!product) throw new NotFoundException(`Product ${id} not found`);
    return product;
  }

  createOne(payload: CreateProductDto) {
    this.counterId++;

    const newProduct = {
      id: this.counterId,
      ...payload,
    };

    this.products.push(newProduct);

    return newProduct;
  }

  updateOne(id: number, payload: any) {
    const product = this.findOne(id);
    if (product) {
      const index = this.products.findIndex((p) => p.id === id);
      this.products[index] = {
        ...product,
        ...payload,
      };
      return this.products[index];
    }
    return 'NOT FOUND';
  }
}
