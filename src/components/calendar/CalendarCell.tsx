interface CalendarCellProps {
  day: number | string;
}

export default function CalendarCell({ day }: CalendarCellProps) {
  return (
    <div
      className={`p-2 text-center rounded-xl font-medium text-base text-gray-600 ${
        day === 22 && "!text-sky-900 bg-sky-100 ring-1"
      }`}
    >
      {day}
    </div>
  );
}
