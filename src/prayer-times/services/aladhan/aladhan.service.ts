import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

// Interfaces
import {
  MonthlyPrayerTimes,
  PrayerTimesResponse,
} from '@/prayer-times/interfaces/prayer-times-response.interface';

@Injectable()
export class AladhanService {
  private readonly apiUrl = 'https://api.aladhan.com/v1/calendar';

  constructor(private http: HttpService) {}

  async getPrayerTimes(
    latitude: number,
    longitude: number,
    method?: number,
  ): Promise<PrayerTimesResponse> {
    const response = await firstValueFrom(
      this.http.get(this.apiUrl, {
        params: {
          latitude,
          longitude,
          method: method,
          iso8601: true,
          annual: true,
        },
      }),
    );

    const data = response.data.data;

    return this.processResponse(data);
  }

  private processResponse(data: Record<string, any[]>): PrayerTimesResponse {
    const months: MonthlyPrayerTimes = {};

    const timezone = data['1'][0].meta.timezone;
    const location = data['1'][0].meta.location;

    for (const month in data) {
      if (data.hasOwnProperty(month)) {
        const days = data[month];
        const monthData = new Array(days.length);

        for (let i = 0; i < days.length; i++) {
          const day = days[i];
          monthData[i] = {
            date: day.date.timestamp,
            timings: {
              Fajr: day.timings.Fajr,
              Sunrise: day.timings.Sunrise,
              Dhuhr: day.timings.Dhuhr,
              Asr: day.timings.Asr,
              Sunset: day.timings.Sunset,
              Maghrib: day.timings.Maghrib,
              Isha: day.timings.Isha,
              Imsak: day.timings.Imsak,
              Midnight: day.timings.Midnight,
              Firstthird: day.timings.Firstthird,
              Lastthird: day.timings.Lastthird,
            },
          };
        }

        months[month] = monthData;
      }
    }
    return {
      timezone,
      location,
      months,
    };
  }
}
