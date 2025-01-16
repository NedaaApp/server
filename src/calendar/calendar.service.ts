import { QueryDto } from '@/dto/api-query.dto';
import { HttpException, Injectable } from '@nestjs/common';
import axios from 'axios';
import { constructQueries } from '@/utils/constructParams';

@Injectable()
export class CalendarService {
  private baseURL = `http://api.aladhan.com/v1`;

  async getCalendar(calendar: QueryDto) {
    const query = constructQueries(calendar);
    const response = await axios.get(`${this.baseURL}/calendar${query}`);
    if (response.status === 200) {
      return response.data;
    }

    throw new HttpException('Error while getting data', response.status);
  }
}
