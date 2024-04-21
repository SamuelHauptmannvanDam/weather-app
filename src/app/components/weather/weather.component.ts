import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from '../../services/weather/weather-data.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  loading: boolean = false;
  error: boolean = false;
  weatherData: any;
  city: string = 'Copenhagen';

  constructor(private weatherService: WeatherDataService) { }

  ngOnInit(): void {
    this.fetchWeatherData(this.city);
  }

  fetchWeatherData(city: string): void {

    this.loading = true;
    this.weatherService.fetchWeatherData(city).subscribe(
      data => {
        this.weatherData = data;
        this.loading = false;
      },
      error => {
        this.error = true;
        this.loading = false;
      }
    );
  }

  getWeatherIconUrl(iconCode: string): string {
    return `http://openweathermap.org/img/wn/${iconCode}.png`;
  }
}
