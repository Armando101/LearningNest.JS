import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('new-endpoint')
  newEndpoint() {
    return "I'm new endpoint";
  }

  // Recibir un parámetro
  @Get('products/:productId')
  getProduct(@Param('productId') productId: any) {
    return `Product ${productId}`;
  }

  // Recibir más de un parámetro
  @Get('categories/:categoryId/products/:productId')
  getCategory(
    @Param('categoryId') categoryId: any,
    @Param('categoryId') productId: any,
  ) {
    return `Product ${productId}, Category ${categoryId}`;
  }

  // // Recibir más de un parámetro, segunda opción
  // @Get('categories/:categoryId/products/:productId')
  // getCategory(@Param() { categoryId, productId }) {
  //   return `Product ${productId}, Category ${categoryId}`;
  // }
}
