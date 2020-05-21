export class Event {
  title: string;
  startDay: Date;
  finishDay: Date;
  duration: number;
  town: string;
  country?: string;
  region?: string;
  id?: string;
  sportHallTitle?: string;

constructor(
  title: string,
  startDay: Date,
  finishDay: Date,
  town: string,
  country?: string,
  region?: string,
  id?: string
) {
  this.title = title;
  this.startDay = startDay;
  this.finishDay = finishDay;
  this.town = town;
  this.country = country;
  this.region = region;
  this.id = id;
  // @ts-ignore
  this.duration = 1 + ( (finishDay - startDay) / (1000 * 60 * 60 * 24) );
}

}
