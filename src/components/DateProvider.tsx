import { useState } from "react";
import { DateContext } from "../contexts/DateContext";
import moment from "moment-jalaali";

export function DateProvider({ children }: { children: React.ReactNode }) {
  const [month, setMonth] = useState(moment().jMonth() + 1);
  const [year, setYear] = useState(moment().jYear());

  function previousMonth() {
    if (month === 1) {
      setMonth(12);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  }

  function nextMonth() {
    if (month === 12) {
      setMonth(1);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  }

  return (
    <DateContext.Provider
      value={{ month, year, setMonth, setYear, previousMonth, nextMonth }}
    >
      {children}
    </DateContext.Provider>
  );
}
