import Navbar from "./components/navbar";
import { ClickButton } from "./components/button";
import {
  BodyPadding,
  CancelButton,
  DeleteButton,
  EditButton,
  SaveButton,
} from "./Global/Styling";

export default async function Home() {
  return (
    <div className="">
      <Navbar />
      <main className={`${BodyPadding} w-full flex`}>
        <div className="flex w-full lg:w-1/4 justify-between items-center">
          <ClickButton props={{ text: "Cancel", styling: CancelButton }} />
          <ClickButton
            props={{
              text: "Edit",
              styling: EditButton,
            }}
          />
          <ClickButton
            props={{
              text: "Delete",
              styling: DeleteButton,
              alertMessage: "Are you sure you want to delete this?",
            }}
          />
          <ClickButton
            props={{
              text: "Save",
              styling: SaveButton,
            }}
          />
        </div>
      </main>
    </div>
  );
}
