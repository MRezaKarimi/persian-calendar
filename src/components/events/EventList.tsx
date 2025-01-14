import EventItem from "./EventItem";

export default function EventList() {
  return (
    <div className="flex flex-col p-4 border-s">
      <EventItem />
      <EventItem />
      <EventItem />
      <EventItem />
    </div>
  );
}
