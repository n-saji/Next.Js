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
  };
}) {
  const router = useRouter();

  const handleClick = () => {
    alert(props.alertMessage || "Button clicked!");
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
