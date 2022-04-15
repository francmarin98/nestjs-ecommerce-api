import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getAll(@Query('limit') limit = 10, @Query('offset') offset = 0) {
    return {
      limit,
      offset,
    };
  }

  @Get(':productId')
  getOne(@Param('productId') productId: string) {
    return { productId };
  }

  @Post()
  createOne(@Body() product: any) {
    return {
      msg: 'Product created',
      product,
    };
  }

  @Put(':productId')
  updateOne(@Param('productId') productId: string, @Body() product: any) {
    return { msg: 'Product updated', productId, product };
  }

  @Delete(':productId')
  deleteOne(@Param('productId') productId: string) {
    return { msg: 'Product deleted', productId };
  }
}
