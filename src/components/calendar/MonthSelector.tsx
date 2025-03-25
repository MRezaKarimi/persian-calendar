import { useContext } from "react";
import { DateContext } from "../../contexts/DateContext";
import { getMonthName } from "../../lib/date-utils/month-name";
import DropDown from "../DropDown";

const monthOptions = Array.from({ length: 12 }, (_, i) => ({
  value: i + 1,
  label: getMonthName(i + 1),
}));

export default function MonthSelector() {
  const { month, setMonth } = useContext(DateContext);

  function handleSelect(value: number) {
    setMonth(value);
  }

  return (
    <DropDown
      options={monthOptions}
      onSelect={handleSelect}
      selectedOption={{ value: month, label: getMonthName(month) }}
    />
  );
}
