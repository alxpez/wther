import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
// Observable class extensions
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';

import { ForecastService } from '../forecast.service'
import { CityPredictionService } from '../city-prediction.service';

import { Forecast } from '../model/forecast';
import { CityPrediction } from '../model/city-prediction';


@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
  providers: [ForecastService, CityPredictionService]
})
export class SearchBarComponent implements OnInit {
	public forecast: Forecast;

	public searchInput: String = "";
	public cities: Observable<CityPrediction[]>;

	public isLoading: boolean = false;
	public hasNoResults: boolean = false;

	constructor(
		private forecastService: ForecastService,
		private cityPredictionService: CityPredictionService
	) { }


	ngOnInit() {
      	this.cities = Observable
      		.create(observer => observer.next(this.searchInput))
      		.switchMap(term => term 
				? this.cityPredictionService.predictCity(term)
				: Observable.of<CityPrediction[]>([]) )
			.catch(error => {
				// TODO: add real error handling
				console.log(error);
				return Observable.of<CityPrediction[]>([]);
      		});
	}

	public searchByCity(city: String): void {
		this.forecastService.forecastByCity(city)
			.then(forecast => this.forecast = forecast);
	}

	public changeLoading(event: boolean): void {
		this.isLoading = event;
	}

	public changeNoResults(event: boolean): void {
		this.hasNoResults = event;
	}
}
