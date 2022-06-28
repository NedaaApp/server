import { TimezoneService } from './timezone.service';
import { Controller, Get, Query } from '@nestjs/common';
import { QueryDto } from 'src/dto/api-query.dto';

@Controller('timezone')
export class TimezoneController {
  constructor(private readonly timezoneService: TimezoneService) {}

  @Get()
  getTimezone(@Query() query: QueryDto) {
    return this.timezoneService.getTimezone(query);
  }
}
