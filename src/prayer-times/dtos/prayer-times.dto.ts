import { IsOptional, IsNumber } from 'class-validator';
import { LocationDto } from '@/prayer-times/dtos/location.dto';

export class PrayerTimesQueryDto extends LocationDto {
  @IsOptional()
  @IsNumber()
  method?: number;

  @IsOptional()
  @IsNumber()
  providerId?: number;
}
