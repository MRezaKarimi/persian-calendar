import { useContext, useEffect, useState } from "react";
import { DateContext } from "../../contexts/DateContext";

export default function YearSelector() {
  const { year, setYear } = useContext(DateContext);
  const [yearInput, setYearInput] = useState(year);

  function handleYearChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.value.match(/[0-9]/)) {
      setYearInput(Number(event.target.value));

      if (event.target.value.length === 4) {
        setYear(Number(event.target.value));
        event.target.blur();
      }
    }
  }

  useEffect(() => {
    setYearInput(year);
  }, [year]);

  return (
    <input
      dir="ltr"
      className="w-12 rounded-md border border-transparent hover:border-gray-300 outline-none text-gray-500 text-center font-medium"
      value={yearInput}
      maxLength={4}
      onChange={handleYearChange}
    />
  );
}
