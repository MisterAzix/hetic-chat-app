import {Controller, Get} from '@nestjs/common';

@Controller('status')
export class HealthController {
  @Get()
  getStatus(): string {
    return 'OK';
  }
}
