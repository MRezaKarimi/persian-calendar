export default function CalendarWeekDays() {
  const weekDays = ["ش", "ی", "د", "س", "چ", "پ", "ج"];

  return (
    <>
      {weekDays.map((day) => (
        <div className="p-2 text-center rounded-xl font text-gray-600" key={day}>
          {day}
        </div>
      ))}
    </>
  );
}
