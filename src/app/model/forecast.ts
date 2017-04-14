import {Clouds} from './clouds';
import {Conditions} from './conditions';
import {Coordinates} from './coordinates';
import {Weather} from './weather';
import {Wind} from './wind';
import {LocaleInfo} from './locale-info';

export class Forecast {
	
	id: Number;
	name: String;
	cod: Number;
	dt: Date;
	base: String;
	sys: LocaleInfo;
	coord: Coordinates;
	weather: Weather[];
	main: Conditions;
	visibility: Number;
	wind: Wind;
	clouds: Clouds;
}
