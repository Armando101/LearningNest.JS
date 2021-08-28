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
import { ProductsService } from 'src/services/products/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get()
  @HttpCode(HttpStatus.ACCEPTED)
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return this.productService.findAll();
  }

  // Recibir un parámetro
  @Get(':productId')
  getProduct(@Param('productId') productId: any) {
    // getProduct(@Res() response: Response, @Param('productId') productId: any) {
    // response.status(200).send({
    //   message: `Product ${productId}`,
    // });
    return this.productService.findOne(+productId);
  }

  // Rutas no dinámicas fan al final
  // De lo contrario chocarían, por ejemplo con el método anterior
  @Get('filter')
  getProductFilter() {
    return { message: `Im a filter` };
  }

  @Post()
  create(@Body() payload: any) {
    // return {
    //   message: 'Acción para crear recursos',
    //   payload,
    // };
    return this.productService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    // return {
    //   id,
    //   payload,
    // };
    return this.productService.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.productService.delete(+id);
  }
}
