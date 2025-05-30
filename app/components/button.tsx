"use client";
import { useRouter } from "next/navigation";
import { NormalButton } from "../Global/Styling";
export function ClickButton({
  props,
}: {
  props: { text?: string; redirect?: string; styling?: string | undefined };
}) {
  const router = useRouter();

  const handleClick = () => {
    if (props.redirect) {
      alert(`Success!`);
      router.push(props.redirect);
    } else {
      alert("Button clicked!");
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
