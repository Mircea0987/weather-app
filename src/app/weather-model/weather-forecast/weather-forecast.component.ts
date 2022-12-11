import { Component, Input, OnInit } from '@angular/core';
import { WeatherData } from '../interfaces/weather-mode';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css'],
})
export class WeatherForecastComponent implements OnInit {
  @Input() weatherData: WeatherData;
  constructor() {}

  ngOnInit(): void {}
}
