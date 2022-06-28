import { Injectable, HttpException } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class CoordinatesService {
  async getCoordinates(address: string): Promise<string> {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${process.env.MAPBOX_TOKEN}&limit=1`;
    const response = await axios.get(url);
    if (response.status === 200) {
      const coordinates = {
        latitude: response.data['features'][0]['geometry']['coordinates'][1],
        longitude: response.data['features'][0]['geometry']['coordinates'][0],
      };
      return JSON.stringify(coordinates);
    }

    throw new HttpException(
      'An error occurd while processing the request',
      500,
    );
  }
}
