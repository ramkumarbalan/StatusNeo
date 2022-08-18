import { HttpException, HttpStatus } from "@nestjs/common"

export const formatSuccessResposne = (data) => {
    return {
        status: HttpStatus.OK,
        data,
        errors: null
    }
}

export const formatErrorResponse = (error, statusCode) => {
    return {
        status: statusCode,
        data: null,
        error: error
    }
}