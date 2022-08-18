import { IsDefined, IsNumber, IsString, Min } from "class-validator";

export class CreateProductRequestDto {
    @IsDefined()
    @IsString()
    name: string;
    @IsDefined()
    @IsString()   
    type: string;
    @IsDefined()
    @IsNumber()
    price: number;
    @IsDefined()
    @IsNumber()
    @Min(1)
    availability: number;
}