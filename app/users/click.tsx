"use client";
export function ClickButton() {
  return (
    <div className="flex justify-center items-center h-screen">
      <button
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded shadow-blue-700 hover:shadow-md transition-shadow duration-300 cursor-pointer"
        onClick={() => {
          alert("Button clicked!");
        }}
      >
        Click me
      </button>
    </div>
  );
}
