import { Controller, Get } from '@nestjs/common';

@Controller('api')
export class ApiController {
    @Get()
    async index() {
        return 'FlowSprint';
    }
}