import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Health')
@Controller('status')
export class HealthController {
  @Get()
  getStatus(): string {
    return 'OK';
  }
}
