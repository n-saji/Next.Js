import { Navbar } from "../page";
export default function InputPage() {
  return (
    <div>
      <Navbar />

      <div className="grid grid-cols-2 gap-4 p-4">
        <input type="calendar" />
        <input type="date" />
        <input type="datetime-local" />
        <input type="month" />
        <input type="time" />
        <input type="week" />
        <input type="text" placeholder="Text input" />
        <input type="email" placeholder="Email input" />
        <input type="password" placeholder="Password input" />
        <input type="number" placeholder="Number input" />
        <input type="search" placeholder="Search input" />
        <input type="tel" placeholder="Telephone input" />
        <input type="url" placeholder="URL input" />
        <input type="color" />
        <input type="file" />
        <input type="checkbox" />
        <input type="radio" />
        <input type="range" />
        <input
          type="submit"
          value="Submit"
          className="bg-transparent cursor-pointer border-4 hover:bg-blue-500
        "
        />
        <input type="reset" value="Reset" />
        <input type="button" value="Button" />
        <input type="hidden" />
      </div>
    </div>
  );
}
