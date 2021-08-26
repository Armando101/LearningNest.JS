import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';
import { Response } from 'express';

@Controller('products')
export class ProductsController {
  @Get()
  @HttpCode(HttpStatus.ACCEPTED)
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return { message: `Products from ${offset} to ${limit}. Brand ${brand}` };
  }

  // Recibir un parámetro
  @Get(':productId')
  getProduct(@Res() response: Response, @Param('productId') productId: any) {
    response.status(200).send({
      message: `Product ${productId}`,
    });
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

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      message: `Product with id=${id} has been deleted`,
    };
  }
}
