import Calendar from "./components/calendar/Calendar";
import EventList from "./components/events/EventList";
import { DateProvider } from "./providers/DateProvider";
import { EventsProvider } from "./providers/EventsProvider";

function App() {
  return (
    <div className="grid grid-cols-2 w-[600px] h-96">
      <DateProvider>
        <EventsProvider>
          <Calendar />
          <EventList />
        </EventsProvider>
      </DateProvider>
    </div>
  );
}

export default App;
