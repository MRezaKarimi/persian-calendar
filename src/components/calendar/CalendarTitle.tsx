import MonthSelector from "./MonthSelector";
import YearSelector from "./YearSelector";

export default function CalendarTitle() {
  return (
    <div className="flex justify-center text-base">
      <MonthSelector />
      <YearSelector />
    </div>
  );
}
