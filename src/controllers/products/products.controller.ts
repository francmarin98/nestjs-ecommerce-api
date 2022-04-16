import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  ParseIntPipe,
} from '@nestjs/common';

import { ProductsService } from '../../services/products/products.service';
import { CreateProductDto } from '../../DTOs/products.dto';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getAll(@Query('limit') limit = 10, @Query('offset') offset = 0) {
    return this.productsService.findAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) productId: number) {
    return this.productsService.findOne(productId);
  }

  @Post()
  createOne(@Body() product: CreateProductDto) {
    return this.productsService.createOne(product);
  }

  @Put(':id')
  updateOne(@Param('id') id: number, @Body() product: any) {
    return this.productsService.updateOne(+id, product);
  }

  @Delete(':id')
  deleteOne(@Param('id') productId: number) {
    return { msg: 'Product deleted', productId };
  }
}
