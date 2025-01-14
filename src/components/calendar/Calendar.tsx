import CalendarBody from "./CalendarBody";
import CalendarHeader from "./CalendarHeader";

export default function Calendar() {
  return (
    <div className="flex flex-col items-center w-max p-4">
      <CalendarHeader />
      <CalendarBody />
    </div>
  );
}
