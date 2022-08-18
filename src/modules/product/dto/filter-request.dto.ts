import { IsDefined, IsObject } from "class-validator";

export class FilterRequestDto {
    @IsDefined()
    @IsObject()
    filters: object;
}