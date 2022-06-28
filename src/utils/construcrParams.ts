import { QueryDto } from 'src/dto/api-query.dto';

export function construcrQueryies(calendar: QueryDto): string {
  let query = '?';
  for (const [key, value] of Object.entries(calendar)) {
    if (value) {
      query += `${key}=${value}&`;
    }
  }

  return query;
}
