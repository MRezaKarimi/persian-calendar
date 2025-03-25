import { type Event } from "../../contexts/EventsContext";

export default function EventItem({ event }: { event: Event }) {
  return (
    <div className="flex py-1 px-2 mb-1.5 text-sm">
      <span
        className={`font-medium me-2 ${
          event.is_holiday ? "text-red-600" : "text-gray-600"
        }`}
      >
        {event.jalali_day}&nbsp;
      </span>
      <span
        className={`${event.is_holiday ? "font-medium text-red-600" : "text-gray-500"}`}
      >
        {event.title}
      </span>
    </div>
  );
}
