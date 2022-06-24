import { Controller, Get, Query } from '@nestjs/common';
import { CalendarService } from './calendar.service';
import { CalendarDto } from 'src/dto/calendar.dto';

@Controller('calendar')
export class CalendarController {
  constructor(private readonly calendarService: CalendarService) {}

  @Get()
  getCalendar(@Query() calendar: CalendarDto) {
    return this.calendarService.getCalendar(calendar);
  }
}
