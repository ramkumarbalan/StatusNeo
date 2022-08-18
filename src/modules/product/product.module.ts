import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, productSchema } from './schema/product.schema';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { ProductRepository } from './repository/product.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Product.name, schema: productSchema}
    ])
  ],
  controllers: [ProductController],
  providers: [ProductService, ProductRepository]
})
export class ProductModule {}
