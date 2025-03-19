import Calendar from "./components/calendar/Calendar";
import { DateProvider } from "./providers/DateProvider";

function App() {
  return (
    <div className="flex w-fit">
      <DateProvider>
        <Calendar />
      </DateProvider>
    </div>
  );
}

export default App;
