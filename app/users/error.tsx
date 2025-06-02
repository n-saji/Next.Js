"use client";

import { startTransition } from "react";
import Navbar from "../components/navbar";
import { useRouter } from "next/navigation";
import { DangerButton } from "../Global/Styling";

export default function HandleUserError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();
  const handleReset = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };
  return (
    <>
      <Navbar />
      <div className="w-full flex  flex-col items-center justify-center">
        <h1 className="text-2xl text-red-600 p-4">
          Server Error: {error.message}
        </h1>
        <button
          className={DangerButton}
          onClick={() => {
            handleReset();
          }}
        >
          Try Again
        </button>
      </div>
    </>
  );
}
