import { TimezoneService } from './timezone.service';
import { Controller, Get, Query, Version } from '@nestjs/common';
import { QueryDto } from 'src/dto/api-query.dto';

@Controller('timezone')
export class TimezoneController {
  constructor(private readonly timezoneService: TimezoneService) {}

  @Get()
  @Version('1')
  getTimezone(@Query() query: QueryDto) {
    return this.timezoneService.getTimezone(query);
  }
}
