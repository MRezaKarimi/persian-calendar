import Calendar from "./components/calendar/Calendar";
import EventList from "./components/events/EventList";

function App() {
  return (
    <div className="flex w-fit">
      <Calendar />
      <EventList />
    </div>
  );
}

export default App;
