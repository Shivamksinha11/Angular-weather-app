import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>('https://community-open-weather-map.p.rapidapi.com/weather', {
      headers: new HttpHeaders()
        .set('X-RapidAPI-Host', 'community-open-weather-map.p.rapidapi.com')
        .set('X-RapidAPI-Key', '27803e722bmsh0dcfc1d7405af79p13b0b1jsn27ea361eaaae'),
      params: new HttpParams()
        .set('q', cityName)
        .set('units', 'metric')
        .set('mode', 'json')
    });
  }
}
