import Navbar from "./components/navbar";
import { ClickButton } from "./components/click";
import { BodyPadding } from "./Global/Styling";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <main className={BodyPadding}>
        <ClickButton />
      </main>
    </div>
  );
}
