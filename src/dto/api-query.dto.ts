import { Transform, Type } from 'class-transformer';
import {
  IsBoolean,
  IsLatitude,
  IsLongitude,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';

export class QueryDto {
  @IsNotEmpty()
  @IsLatitude()
  @Type(() => Number)
  latitude: number;

  @IsNotEmpty()
  @IsLongitude()
  @Type(() => Number)
  longitude: number;

  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => {
    if (value === 'true') return true;
    if (value === 'false') return false;
    return value;
  })
  iso8601?: boolean;

  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => {
    if (value === 'true') return true;
    if (value === 'false') return false;
    return value;
  })
  annual?: boolean;

  @IsOptional()
  method?: string;
}
