import { HttpException, HttpStatus } from "@nestjs/common"

export const formatSuccessResposne = (data) => {
    return {
        status: HttpStatus.OK,
        data,
        errors: null
    }
}

export const formatErrorResponse = (error, statusCode) => {
     throw new  HttpException({message: error}, statusCode) 
}