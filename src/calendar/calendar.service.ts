import { CalendarDto } from 'src/dto/calendar.dto';
import { HttpException, Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class CalendarService {
  private baseURL = `http://api.aladhan.com/v1`;

  construcrQueryies(calendar: CalendarDto): string {
    let query = '?';
    for (const [key, value] of Object.entries(calendar)) {
      if (value) {
        query += `${key}=${value}&`;
      }
    }

    return query;
  }
  async getCalendar(calendar: CalendarDto) {
    const query = this.construcrQueryies(calendar);
    const response = await axios.get(`${this.baseURL}/calendar${query}`);
    if (response.status === 200) {
      return response.data;
    }

    throw new HttpException('Error while getting data', response.status);
  }
}
