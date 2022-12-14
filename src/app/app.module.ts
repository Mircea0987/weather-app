import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { WeatherModelComponent } from './weather-model/weather-model.component';
import { WeatherOverviewComponent } from './weather-model/weather-overview/weather-overview.component';
import { WeatherTableComponent } from './weather-model/weather-table/weather-table.component';
import { WeatherForecastComponent } from './weather-model/weather-forecast/weather-forecast.component';
import { WeatherAirConditionComponent } from './weather-model/weather-air-condition/weather-air-condition.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchBarComponent } from './weather-model/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { CitiesComponent } from './cities/cities.component';
import { CitiesOverviewComponent } from './cities/cities-overview/cities-overview.component';
import { SideBarComponent } from './side-bar/side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherModelComponent,
    WeatherOverviewComponent,
    WeatherTableComponent,
    WeatherForecastComponent,
    WeatherAirConditionComponent,
    SearchBarComponent,
    CitiesComponent,
    CitiesOverviewComponent,
    SideBarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
