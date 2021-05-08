import { CovidBasicData } from './covid-basic-data';

export class CovidCountryData extends CovidBasicData {
  country: number;
  latitude: number;
  longitude: number;
  date: Date;

  constructor(obj?: any) {
    super(obj['provinces'][0]);
    this.country = obj && obj['country'] ? obj['country'] : null;
    this.latitude = obj && obj['latitude'] ? obj['latitude'] : null;
    this.longitude = obj && obj['longitude'] ? obj['longitude'] : null;
    this.date = obj && obj['date'] ? obj['date'] : null;
  }
}
