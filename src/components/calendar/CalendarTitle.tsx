import { useContext } from "react";
import { DateContext } from "../../contexts/DateContext";
import { getMonthName } from "../../lib/date-utils/month-name";
import YearSelector from "./YearSelector";

export default function CalendarTitle() {
  const { month } = useContext(DateContext);

  return (
    <div className="flex justify-center text-base">
      <span className="text-sky-800 font-medium">{getMonthName(month)}</span>
      <YearSelector />
    </div>
  );
}
