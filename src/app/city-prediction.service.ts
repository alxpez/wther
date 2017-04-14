import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '../environments/environment';

import { CityPrediction } from './model/city-prediction';


@Injectable()
export class CityPredictionService {

  	constructor(private http: Http) { }

  	public predictCity(input: String): Observable<CityPrediction[]> {
  		return this.http
  			.get(`${environment.gpApiUrl}?input=${input}&types=(cities)&language=en_US&key=${environment.gpApiID}`)
  			.map(response => response.json().predictions as CityPrediction[])
  	}

}
