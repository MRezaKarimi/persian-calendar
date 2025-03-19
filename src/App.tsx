import Calendar from "./components/calendar/Calendar";
import { DateProvider } from "./providers/DateProvider";
import { EventsProvider } from "./providers/EventsProvider";

function App() {
  return (
    <div className="flex w-fit">
      <DateProvider>
        <EventsProvider>
          <Calendar />
        </EventsProvider>
      </DateProvider>
    </div>
  );
}

export default App;
