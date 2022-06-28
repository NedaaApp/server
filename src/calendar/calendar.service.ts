import { QueryDto } from 'src/dto/api-query.dto';
import { HttpException, Injectable } from '@nestjs/common';
import axios from 'axios';
import { construcrQueryies } from 'src/utils/construcrParams';

@Injectable()
export class CalendarService {
  private baseURL = `http://api.aladhan.com/v1`;

  async getCalendar(calendar: QueryDto) {
    const query = construcrQueryies(calendar);
    const response = await axios.get(`${this.baseURL}/calendar${query}`);
    if (response.status === 200) {
      return response.data;
    }

    throw new HttpException('Error while getting data', response.status);
  }
}
