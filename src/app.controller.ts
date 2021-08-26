import { Controller, Get, Param, Query } from '@nestjs/common';
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

  @Get('products')
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `Products from ${offset} to ${limit}. Brand ${brand}`;
  }

  // Recibir un parámetro
  @Get('products/:productId')
  getProduct(@Param('productId') productId: any) {
    return `Product ${productId}`;
  }

  // Rutas no dinámicas fan al final
  // De lo contrario chocarían, por ejemplo con el método anterior
  @Get('products/filter')
  getProductFilter() {
    return `Im a filter`;
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
