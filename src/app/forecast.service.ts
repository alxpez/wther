import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { environment } from '../environments/environment'
import { Forecast } from './model/forecast';


@Injectable()
export class ForecastService {

  constructor(private http: Http) { }

 	public forecastByCity(city: String): Promise<Forecast> {
  		return this.http.get(`${environment.owmApiUrl}?q=${city}&units=metric&appid=${environment.owmApiID}`)
  			.toPromise()
  			.then(response => response.json() as Forecast)
  			.catch(this.handleError);
  	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred during data fetching', error);
		return Promise.reject(error.messge || error);
	}
}
