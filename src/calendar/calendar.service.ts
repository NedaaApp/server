import { CalendarDto } from 'src/dto/calendar.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CalendarService {
  getCalendar(calendar: CalendarDto) {
    return calendar;
  }
}
