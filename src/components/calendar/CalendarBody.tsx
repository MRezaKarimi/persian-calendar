import { useContext, useMemo } from "react";
import CalendarCell from "./CalendarCell";
import CalendarWeekDays from "./CalendarWeekDays";
import { DateContext } from "../../contexts/DateContext";
import { EventsContext } from "../../contexts/EventsContext";
import { getDateRange } from "../../lib/date-utils/date-range";
import moment from "moment-jalaali";

const today = moment();

export default function CalendarBody() {
  const { month, year } = useContext(DateContext);
  const { holidays } = useContext(EventsContext);

  const days = useMemo(() => getDateRange(year, month), [year, month]);

  return (
    <div className="grid grid-cols-7 gap-1">
      <CalendarWeekDays />

      {days.map((dayObj) => (
        <CalendarCell
          key={`${dayObj.day}${dayObj.month}`}
          day={dayObj.day}
          isGray={dayObj.month !== month}
          active={dayObj.isEqual(today)}
          holiday={
            dayObj.isFriday ||
            holidays.has(`${dayObj.year}-${dayObj.month}-${dayObj.day}`)
          }
        />
      ))}
    </div>
  );
}
