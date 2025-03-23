import { useContext } from "react";
import { DateContext } from "../../contexts/DateContext";
import { getMonthName } from "../../lib/date-utils/month-name";

export default function CalendarTitle() {
  return (
    <div className="text-base">
      <span className="text-sky-800 font-medium pe-2">
        {getMonthName(useContext(DateContext).month)}
      </span>
      <span className="text-gray-500 font-medium">{useContext(DateContext).year}</span>
    </div>
  );
}
