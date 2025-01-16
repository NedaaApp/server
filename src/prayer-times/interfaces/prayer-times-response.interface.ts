export interface PrayerTimings {
  Fajr: string;
  Sunrise: string;
  Dhuhr: string;
  Asr: string;
  Sunset: string;
  Maghrib: string;
  Isha: string;
  Imsak: string;
  Midnight: string;
  Firstthird: string;
  Lastthird: string;
}

export interface Location {
  latitude: number;
  longitude: number;
}

export interface DailyPrayerTimes {
  timings: PrayerTimings;
  date: string;
}

export interface MonthlyPrayerTimes {
  [month: string]: DailyPrayerTimes[];
}

export interface PrayerTimesResponse {
  timezone: string;
  location: Location;
  months: MonthlyPrayerTimes;
}
