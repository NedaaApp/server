import { Controller, Get, Query } from '@nestjs/common';
import { CalendarService } from './calendar.service';
import { QueryDto } from 'src/dto/api-query.dto';

@Controller('calendar')
export class CalendarController {
  constructor(private readonly calendarService: CalendarService) {}

  @Get()
  getCalendar(@Query() calendar: QueryDto) {
    return this.calendarService.getCalendar(calendar);
  }
}
