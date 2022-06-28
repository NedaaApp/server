import { HttpException, Injectable } from '@nestjs/common';
import axios from 'axios';
import { QueryDto } from 'src/dto/api-query.dto';
import { construcrQueryies } from 'src/utils/construcrParams';

@Injectable()
export class TimezoneService {
  private baseURL = `http://api.aladhan.com/v1`;

  async getTimezone(queryDto: QueryDto): Promise<string> {
    const query = construcrQueryies(queryDto);
    const response = await axios.get(`${this.baseURL}/timings${query}`);
    if (response.status === 200) {
      const data = response.data;
      const timezone = data.data?.meta?.timezone;
      if (timezone) {
        return JSON.stringify({ timezone });
      }

      throw new HttpException('Error while getting data', response.status);
    }
  }
}
