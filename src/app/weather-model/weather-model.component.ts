import { Component, OnInit } from '@angular/core';
import { WeatherData } from './interfaces/weather-mode';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-weather-model',
  templateUrl: './weather-model.component.html',
  styleUrls: ['./weather-model.component.css'],
})
export class WeatherModelComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}

  dataList: WeatherData;
  ngOnInit(): void {
    this.weatherService.getData('Tolyatti').subscribe((data: any) => {
      this.dataList = data;
    });
  }
}
