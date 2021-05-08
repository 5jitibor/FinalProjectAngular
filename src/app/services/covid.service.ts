import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CovidBasicData } from '../models/covid-basic-data';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CovidCountryData } from '../models/covid-country-data';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http: HttpClient) { }

  getTotals(): Observable<CovidBasicData[]> {
    const URL: string = 'https://covid-19-data.p.rapidapi.com/totals';

    return this.http.get(URL, { headers: this.buildRapidApiHeaders() }).pipe(
      map((data: [any]) => {
        return data.map((item: JSON) => {
          return new CovidBasicData(item);
        });
      })
    );
  }

  getCountriesData(): Observable<CovidCountryData[]> {
    let httpParams: HttpParams = new HttpParams();
    httpParams = httpParams.set('date-format', 'YYY-MM-DD');
    httpParams = httpParams.set('date', '2020-06-11');

    const URL = 'https://covid-19-data.p.rapidapi.com/report/country/all';

    return this.http
      .get(URL, { headers: this.buildRapidApiHeaders(), params: httpParams })
      .pipe(
        map((data: []) => {
          return data.map((item: JSON) => {
            return new CovidCountryData(item);
          });
        })
      );
  }

  getCountryData(date: string): Observable<CovidCountryData> {
    let httpParams: HttpParams = new HttpParams();
    httpParams = httpParams.set('date-format', 'YYYY-MM-DD');
    httpParams = httpParams.set('date', date);
    httpParams = httpParams.set('name', 'Spain');

    return this.http
      .get('https://covid-19-data.p.rapidapi.com/report/country/name', {
        headers: this.buildRapidApiHeaders(),
        params: httpParams,
      })
      .pipe(
        map((data: []) => {
          const itemsArray: CovidCountryData[] = data.map((item: JSON) => {
            return new CovidCountryData(item);
          });
          return itemsArray[0];
        })
      );
  }

  private buildRapidApiHeaders(): HttpHeaders {
    let httpHeaders: HttpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.set(
      'x-rapidapi-key',
      '376fe887b4msh03d31a8a79543c0p1cc498jsnc6803f649a46'
    );
    httpHeaders = httpHeaders.set('useQueryString', 'true');
    return httpHeaders;
  }
}
