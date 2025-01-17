import Calendar from "./components/calendar/Calendar";
import EventList from "./components/events/EventList";
import { DateProvider } from "./components/DateProvider";

function App() {
  return (
    <div className="flex w-fit">
      <DateProvider>
        <Calendar />
        <EventList />
      </DateProvider>
    </div>
  );
}

export default App;
