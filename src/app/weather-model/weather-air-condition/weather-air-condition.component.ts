import { Component, Input, OnInit } from '@angular/core';
import { WeatherData } from '../interfaces/weather-mode';

@Component({
  selector: 'app-weather-air-condition',
  templateUrl: './weather-air-condition.component.html',
  styleUrls: ['./weather-air-condition.component.css'],
})
export class WeatherAirConditionComponent implements OnInit {
  @Input() weatherData: WeatherData;
  constructor() {}

  ngOnInit(): void {}
}
