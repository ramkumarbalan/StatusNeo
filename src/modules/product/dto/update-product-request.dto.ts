import { IsDefined, IsNumber, IsOptional, IsString, Min } from "class-validator";

export class UpdateProductRequestDto {
    @IsOptional()
    @IsString()
    name: string;
    @IsOptional()
    @IsString()   
    type: string;
    @IsOptional()
    @IsNumber()
    price: number;
    @IsOptional()
    @IsNumber()
    @Min(1)
    availability: number;
}