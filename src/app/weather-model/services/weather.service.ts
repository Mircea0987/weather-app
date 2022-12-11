import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from '../interfaces/weather-mode';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getData(cityName: any): Observable<WeatherData> {
    let url =
      'http://api.weatherapi.com/v1/current.json?key=365ed229ada14ff98ba112553220912&q=Dublin&aqi=no';
    return this.http.get<WeatherData>(url, {
      params: new HttpParams().set('q', cityName),
    });
  }
}
