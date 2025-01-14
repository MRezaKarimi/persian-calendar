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
}
