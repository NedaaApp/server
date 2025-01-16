import { QueryDto } from '@/dto/api-query.dto';

export function constructQueries(calendar: QueryDto): string {
  let query = '?';
  for (const [key, value] of Object.entries(calendar)) {
    if (value) {
      query += `${key}=${value}&`;
    }
  }

  return query;
}
