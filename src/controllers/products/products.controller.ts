import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return { message: `Products from ${offset} to ${limit}. Brand ${brand}` };
  }

  // Recibir un parámetro
  @Get(':productId')
  getProduct(@Param('productId') productId: any) {
    return { message: `Product ${productId}` };
  }

  // Rutas no dinámicas fan al final
  // De lo contrario chocarían, por ejemplo con el método anterior
  @Get('filter')
  getProductFilter() {
    return { message: `Im a filter` };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Acción para crear recursos',
      payload,
    };
  }
}
