import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `Products from ${offset} to ${limit}. Brand ${brand}`;
  }

  // Recibir un parámetro
  @Get(':productId')
  getProduct(@Param('productId') productId: any) {
    return `Product ${productId}`;
  }

  // Rutas no dinámicas fan al final
  // De lo contrario chocarían, por ejemplo con el método anterior
  @Get('filter')
  getProductFilter() {
    return `Im a filter`;
  }
}
