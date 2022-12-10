import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { SideBarComponent } from './side-bar/side-bar.component';
import { WeatherModelComponent } from './weather-model/weather-model.component';
import { WeatherOverviewComponent } from './weather-model/weather-overview/weather-overview.component';
import { WeatherTableComponent } from './weather-model/weather-table/weather-table.component';
import { WeatherForecastComponent } from './weather-model/weather-forecast/weather-forecast.component';
import { WeatherAirConditionComponent } from './weather-model/weather-air-condition/weather-air-condition.component';

@NgModule({
  declarations: [AppComponent, SideBarComponent, WeatherModelComponent, WeatherOverviewComponent, WeatherTableComponent, WeatherForecastComponent, WeatherAirConditionComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
