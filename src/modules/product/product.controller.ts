import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateProductRequestDto } from './dto/create-product-request.dto';
import { FilterRequestDto } from './dto/filter-request.dto';
import { UpdateProductRequestDto } from './dto/update-product-request.dto';
import { ProductService } from './product.service';

@Controller('v1/product')
export class ProductController {

    constructor(
        private readonly productService: ProductService
    ) {}

    @Post('/create')
    async create(@Body() body: CreateProductRequestDto) {
        return await this.productService.create(body);        
    }


    @Post('/find-all')
    async findAll(@Body() body: FilterRequestDto) {
        return await this.productService.getAll(body);
    }
    
    @Get('/:id')
    async findById(@Param('id') id: string) {
        return await this.productService.findById(id)
    }

    @Put('/:id')
    async update(@Param('id') id: string,  @Body() body: UpdateProductRequestDto) {
        return await this.productService.update(id, body);
    }

    @Delete('/:id')
    async deleteProduct(@Param('id') id: string) {
        return await this.productService.deleteProduct(id);
    }
}
