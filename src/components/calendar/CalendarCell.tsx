interface CalendarCellProps {
  day: number | string;
  isGray: boolean;
  active: boolean;
}

export default function CalendarCell({ day, active, isGray }: CalendarCellProps) {
  return (
    <div
      className={`size-9 p-2 text-center rounded-full font-medium text-base text-gray-600 ${
        active && "!text-sky-800 bg-sky-100 ring-1"
      } ${isGray && "!text-gray-300"}`}
    >
      {day}
    </div>
  );
}
