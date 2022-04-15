import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':categoryId/products/:productId')
  getProductByCategory(
    @Param('categoryId') categoryId: string,
    @Param('productId') productId: string,
  ) {
    return {
      categoryId,
      productId,
    };
  }
}
