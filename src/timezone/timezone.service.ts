import { HttpException, Injectable } from '@nestjs/common';
import axios from 'axios';
import { QueryDto } from 'src/dto/api-query.dto';
import { construcrQueryies } from 'src/utils/construcrParams';

@Injectable()
export class TimezoneService {
  private baseURL = `http://api.aladhan.com/v1`;

  async getTimezone(queryDto: QueryDto): Promise<string> {
    const currnetDateUnix = new Date().getTime() / 1000;
    const query = construcrQueryies(queryDto);
    const response = await axios.get(
      `${this.baseURL}/timings/${currnetDateUnix}${query}`,
    );
    const data = response.data;
    const timezone = data.data?.meta?.timezone;

    if (response.status !== 200 || !timezone) {
      throw new HttpException('Error while getting data', response.status);
    }

    return JSON.stringify({ timezone });
  }
}
