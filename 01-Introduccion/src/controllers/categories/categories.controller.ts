import { Param } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  // Recibir más de un parámetro
  @Get(':categoryId/products/:productId')
  getCategory(
    @Param('categoryId') categoryId: any,
    @Param('categoryId') productId: any,
  ) {
    return `Product ${productId}, Category ${categoryId}`;
  }
}
