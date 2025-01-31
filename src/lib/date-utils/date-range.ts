import moment from "moment-jalaali";
import { CustomDate } from "./custom-date";

moment.loadPersian();

export function getDateRange(year: number, month: number): CustomDate[] {
  const startRangeDate = moment
    .utc(`${year} ${month} 00:00`, "jYYYY jM HH:mm")
    .startOf("week")
    .startOf("day");
  const endRangeDate = moment
    .utc(`${year} ${month} 00:00`, "jYYYY jM HH:mm")
    .endOf("jMonth")
    .endOf("week")
    .startOf("day");

  const dateRange: CustomDate[] = [];
  const currentDate = moment(startRangeDate);

  while (currentDate <= endRangeDate) {
    dateRange.push(new CustomDate(currentDate));
    currentDate.add(1, "day");
  }

  return dateRange;
}
