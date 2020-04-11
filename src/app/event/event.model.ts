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
  // @ts-ignore
    return (1 + (this.finishDate - this.startDate) / (1000 * 24 * 60 * 60));
  }
}
