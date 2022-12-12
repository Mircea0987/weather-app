import { Component, Input, OnInit } from '@angular/core';
import { WeatherData } from '../interfaces/weather-mode';

@Component({
  selector: 'app-weather-table',
  templateUrl: './weather-table.component.html',
  styleUrls: ['./weather-table.component.css'],
})
export class WeatherTableComponent implements OnInit {
  constructor() {}
  @Input() weatherData: WeatherData;

  ngOnInit(): void {}
}
