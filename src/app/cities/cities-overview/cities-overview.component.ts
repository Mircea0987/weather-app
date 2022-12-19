import { Component, Input, OnInit } from '@angular/core';
import { WeatherData } from 'src/app/weather-model/interfaces/weather-mode';
import { WeatherService } from 'src/app/weather-model/services/weather.service';

@Component({
  selector: 'app-cities-overview',
  templateUrl: './cities-overview.component.html',
  styleUrls: ['./cities-overview.component.css'],
})
export class CitiesOverviewComponent implements OnInit {
  constructor() {}

  @Input() weatherData: WeatherData;

  ngOnInit(): void {}
}
