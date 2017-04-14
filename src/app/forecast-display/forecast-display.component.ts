import { Component, OnInit, Input } from '@angular/core';

import { Forecast } from '../model/forecast';


@Component({
  selector: 'forecast-display',
  templateUrl: './forecast-display.component.html',
  styleUrls: ['./forecast-display.component.css']
})
export class ForecastDisplayComponent implements OnInit {
	@Input() public forecast: Forecast;

	constructor() { }

	ngOnInit() {
	}

	public setIconClass(): String {
		let iconCode = "owf-";
		let now = this.forecast.dt;

		iconCode += this.forecast.weather[0].id;

		if((now > this.forecast.sys.sunrise) && (now < this.forecast.sys.sunset))
			iconCode += "-d";
		else
			iconCode += "-n";

		return iconCode;
	}
}
