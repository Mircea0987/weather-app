import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { WeatherData } from '../interfaces/weather-mode';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather-overview',
  templateUrl: './weather-overview.component.html',
  styleUrls: ['./weather-overview.component.css'],
})
export class WeatherOverviewComponent implements OnInit {
  @Input() weatherData: WeatherData;

  ngOnInit(): void {}
}
