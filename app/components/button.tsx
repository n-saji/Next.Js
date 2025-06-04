"use client";
import { useRouter } from "next/navigation";
import { NormalButton } from "../Global/Styling";
export function ClickButton({
  props,
}: {
  props: {
    text?: string;
    redirect?: string;
    styling?: string | undefined;
    alertMessage?: string | undefined;
    action?: string | undefined;
    id?: number | undefined;
  };
}) {
  const router = useRouter();

  const handleClick = async () => {
    alert(props.alertMessage || "Button clicked!");
    if (props.action) {
      switch (props.action) {
        case "delete": {
          await fetch(`/users/${props.id}/api`, {
            method: "DELETE",
          })
            .then((response) => {
              if (response.ok) {
                alert("User deleted successfully!");
              } else {
                alert("Failed to delete user.");
              }
            })
            .catch((error) => {
              console.error("Error deleting user:", error);
              alert("An error occurred while deleting the user.");
            });
        }
      }
    }
    if (props.redirect) {
      router.push(props.redirect);
    }
  };

  return (
    <div>
      <button className={props.styling || NormalButton} onClick={handleClick}>
        {props.text || "Click me"}
      </button>
    </div>
  );
}
