import CalendarBody from "./CalendarBody";
import CalendarHeader from "./CalendarHeader";
import GoToToday from "./GoToToday";

export default function Calendar() {
  return (
    <div className="flex flex-col items-center w-max p-4">
      <CalendarHeader />
      <CalendarBody />
      <GoToToday />
    </div>
  );
}
