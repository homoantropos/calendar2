export class Event {
  title: string;
  startDay: Date;
  finishDay: Date;
  duration: number;
  country?: string;
  region?: string;
  town: string;
  id: number;

constructor(
  title: string,
  startDay: Date,
  finishDay: Date,
  town: string,
  id: number,
  country?: string,
  region?: string
) {
  this.title = title;
  this.startDay = startDay;
  this.finishDay = finishDay;
  // @ts-ignore
  this.duration = 1 + ( (finishDay - startDay) / (1000 * 60 * 60 * 24) );
  this.country = country;
  this.region = region;
  this.town = town;
  this.id = id;
}

}
