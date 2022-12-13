import { Controller, Get, HttpException, HttpStatus, Post, Param } from '@nestjs/common';
import { OPTIONS } from '../constants/options'
@Controller('options')
export class OptionsController {
    options = OPTIONS
    constructor() {}


    @Get()
    getAllOptions(): Record<string, any> {
        return this.options
    }

    @Get('/:op')
    getOptions(@Param('op') op:string): Record<string, any> {
        return this.options[op]
    }


}
