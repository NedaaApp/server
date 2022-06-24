import { Transform, Type } from 'class-transformer';
import {
  IsBoolean,
  IsLatitude,
  IsLongitude,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';

export class CalendarDto {
  @IsNotEmpty()
  @IsLatitude()
  @Type(() => Number)
  latitude: number;

  @IsNotEmpty()
  @IsLongitude()
  @Type(() => Number)
  longtude: number;

  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => {
    if (value === 'true') return true;
    if (value === 'false') return false;
    return value;
  })
  ios8601?: boolean;

  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => {
    if (value === 'true') return true;
    if (value === 'false') return false;
    return value;
  })
  annual?: boolean;
}
