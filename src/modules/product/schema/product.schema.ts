import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({timestamps: true})
export class Product {
    @Prop({type: String})
    name: string;
    @Prop({type: String})
    type: string;
    @Prop({type: Number})
    price: number;
    @Prop({type: Number})
    availability: number;
    @Prop({type: Boolean, default: true})
    isActive: boolean;
    @Prop({type: Boolean, default: false})
    isDeleted: boolean;
}

export const productSchema = SchemaFactory.createForClass(Product);