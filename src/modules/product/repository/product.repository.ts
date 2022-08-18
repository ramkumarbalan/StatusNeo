import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import e from "express";
import { Mode } from "fs";
import { Model } from "mongoose";
import { Product } from "src/modules/product/schema/product.schema";
import { CreateProductRequestDto } from "../dto/create-product-request.dto";
import { UpdateProductRequestDto } from "../dto/update-product-request.dto";

@Injectable()
export class ProductRepository {
    constructor(
        @InjectModel(Product.name) private readonly model: Model<Product>
    ) {}

    async create(body: CreateProductRequestDto) {
        try {
            return await new this.model(body).save()
            .then(data => {
                return data;
            })
        } catch(e) {
            throw e.message;
        }
    }

    async getAll(filters) {
        return await this.model.find(filters)
    }

    async findById(id: string) {
        return await this.model.findById(id).then(data => {
            if(data) 
                return data
            return 'No data found!'
        })
    } 

    async update(id: string, body: UpdateProductRequestDto) {
        return await this.model.findByIdAndUpdate(id, {$set: body}, {new: true})
        .then(data => {
            if(data)
                return data;
            return 'No data found!'
        })
    }

    async deleteProduct(id) {
        return await this.model.findByIdAndUpdate(id, {$set: {isDeleted: true}})
        .then(data => {
            if(data)
                return 'Deleted Successfully';
            return 'No data found!'
        })
    }
}