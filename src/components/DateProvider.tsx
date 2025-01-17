import { useState } from "react";
import { DateContext } from "../contexts/DateContext";
import moment from "moment-jalaali";

export function DateProvider({ children }: { children: React.ReactNode }) {
  const [month, setMonth] = useState(moment().jMonth() + 1);
  const [year, setYear] = useState(moment().jYear());

  return (
    <DateContext.Provider value={{ month, year, setMonth, setYear }}>
      {children}
    </DateContext.Provider>
  );
}
