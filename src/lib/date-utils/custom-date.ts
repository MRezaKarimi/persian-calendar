import moment from "moment-jalaali";

export class CustomDate {
  constructor(
    public year: number,
    public month: number,
    public day: number,
    public isHoliday = false
  ) {}

  toString() {
    return `${this.year} ${this.month} ${this.day}`;
  }

  isEqual(date: moment.Moment) {
    return (
      date.jYear() === this.year &&
      date.jMonth() + 1 === this.month &&
      date.jDate() === this.day
    );
  }
}
