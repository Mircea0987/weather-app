import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { WeatherData } from '../interfaces/weather-mode';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getData(cityName: any): Observable<WeatherData> {
    let url = `https://api.weatherapi.com/v1/forecast.json?key=d313c9a0276c441d84e152559221712&q=${cityName}&days=7&aqi=yes&alerts=no`;
    return this.http.get<WeatherData>(url);
  }
}
