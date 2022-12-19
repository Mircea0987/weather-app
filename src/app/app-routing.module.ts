import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesComponent } from './cities/cities.component';
import { WeatherModelComponent } from './weather-model/weather-model.component';

const routes: Routes = [
  {
    path: '',
    component: WeatherModelComponent,
  },
  { path: 'cities', component: CitiesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
