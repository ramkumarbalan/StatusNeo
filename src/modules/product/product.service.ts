import { HttpStatus, Injectable } from '@nestjs/common';
import { formatErrorResponse, formatSuccessResposne } from 'src/common/response-formatter';
import { CreateProductRequestDto } from './dto/create-product-request.dto';
import { FilterRequestDto } from './dto/filter-request.dto';
import { UpdateProductRequestDto } from './dto/update-product-request.dto';
import { ProductRepository } from './repository/product.repository';

@Injectable()
export class ProductService {
    constructor(
        private readonly repository: ProductRepository
    ) {}

    async create(body: CreateProductRequestDto) {
        try {
            const result = await this.repository.create(body);
            return formatSuccessResposne(result);
        } catch(e) {
            return formatErrorResponse(e.message, HttpStatus.BAD_REQUEST);
        }
    }

    async getAll(body: FilterRequestDto) {
        const result = await this.repository.getAll(body.filters);
        return formatSuccessResposne(result);
    }

    async findById(id: string) {
        const results = await this.repository.findById(id);
        return formatSuccessResposne(results);
    }

    async update(id: string, body: UpdateProductRequestDto) {
        const results = await this.repository.update(id, body)
        return formatSuccessResposne(results);
    }

    async deleteProduct(id: string) {
        const result = await this.repository.deleteProduct(id);
        return formatSuccessResposne(result);
    }
}
