import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherAirConditionComponent } from './weather-air-condition.component';

describe('WeatherAirConditionComponent', () => {
  let component: WeatherAirConditionComponent;
  let fixture: ComponentFixture<WeatherAirConditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherAirConditionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherAirConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
