import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable, tap } from 'rxjs';
import { getPreveiousYearData } from '../utils/date-utils';
import { RatesResponse } from '../models/rates.model';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private API_KEY = '975a0d894752a4b7a2e6c6ea30e2d7c6';
  private baseURL = 'https://data.fixer.io/api';

  params = new HttpParams()
    .append('access_key', this.API_KEY)
    .append('symbols', 'USD,AUD,CAD,PLN,GBP,EUR,NZD,CNY,CHF');

  constructor(private http: HttpClient) {}

  getRates(): Observable<RatesResponse> {
    return this.http
      .get<RatesResponse>(`${this.baseURL}/latest`, { params: this.params })
      .pipe(tap(data => console.log(data)));
  }

  getHistoricalRates(): Observable<RatesResponse> {
    const date = getPreveiousYearData();
    return this.http
      .get<RatesResponse>(`${this.baseURL}/${date}`, { params: this.params })
      .pipe(tap(data => console.log(data)));
  }
}
