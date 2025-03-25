import { useContext } from "react";
import { DateContext } from "../../contexts/DateContext";
import moment from "moment-jalaali";

export default function GoToToday() {
  const { year, month, setMonth, setYear } = useContext(DateContext);
  const today = moment();

  if (today.jMonth() + 1 !== month || today.jYear() !== year) {
    return (
      <div
        className="text-gray-500 text-sm cursor-pointer mt-auto"
        onClick={() => {
          setMonth(today.jMonth() + 1);
          setYear(today.jYear());
        }}
      >
        برو به امروز
      </div>
    );
  }
}
