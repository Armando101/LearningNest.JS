import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from 'src/dto/products.dtos';
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
  getProduct(@Param('productId', ParseIntPipe) productId: any) {
    return this.productService.findOne(productId);
  }

  // Rutas no dinámicas fan al final
  // De lo contrario chocarían, por ejemplo con el método anterior
  @Get('filter')
  getProductFilter() {
    return { message: `Im a filter` };
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    return this.productService.create(payload);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateProductDto) {
    return this.productService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.productService.delete(id);
  }
}
