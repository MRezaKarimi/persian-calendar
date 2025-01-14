import CalendarCell from "./CalendarCell";
import CalendarWeekDays from "./CalendarWeekDays";

export default function CalendarBody() {
  const days = Array.from({ length: 42 }, (_, i) => i + 1);

  return (
    <div className="grid grid-cols-7 gap-1">
      <CalendarWeekDays />

      {days.map((day) => (
        <CalendarCell day={day} />
      ))}
    </div>
  );
}
