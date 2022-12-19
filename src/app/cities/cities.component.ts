import { Component, OnInit } from '@angular/core';
import { WeatherData } from '../weather-model/interfaces/weather-mode';
import { WeatherService } from '../weather-model/services/weather.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css'],
})
export class CitiesComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}
  dataList: WeatherData;
  ngOnInit(): void {
    this.weatherService.getData('San Francisco').subscribe((data: any) => {
      this.dataList = data;
      console.log(this.dataList);
    });
  }
}
