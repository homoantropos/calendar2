export class Event {
  title: string;
  startDate: Date;
  finishDate: Date;
  duration: number;
  country?: string;
  region?: string;
  town: string;

constructor(
  title: string,
  startDate: Date,
  finishDate: Date,
  town: string,
  country?: string,
  region?: string
) {
  this.title = title;
  this.startDate = startDate;
  this.finishDate = finishDate;
  this.duration = this.days;
  this.country = country;
  this.region = region;
  this.town = town;
}
  get days(): number {
    return  this.finishDate.getDate() + 1 - this.startDate.getDate();
  }
}
