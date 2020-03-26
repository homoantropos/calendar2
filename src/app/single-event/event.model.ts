export class Event {
	title: string;
	start: string;
	end: string;
	days: number;
	country?: string;
	region?: string;
	town: string;

constructor(
	title: string,
	start: string,
	end: string,
	days: number,
	town: string,
	country?: string,
	region?: string
	)
	{
	this.title = title;
	this.start = start;
	this.end = end;
	this.days = days;
	this.country = country;
	this.region = region;
	this.town = town;
	}
}