import moment from "moment-jalaali";

export class CustomDate {
  year: number;
  month: number;
  day: number;
  isHoliday = false;

  constructor(moment: moment.Moment, isHoliday?: boolean) {
    this.year = moment.jYear();
    this.month = moment.jMonth() + 1;
    this.day = moment.jDate();
    this.isHoliday = isHoliday ?? moment.weekday() === 6;
  }

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
