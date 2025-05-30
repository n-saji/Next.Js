"use client";
export function ClickButton() {
  return (
    <div>
      <button
        className="bg-blue-900 text-white font-bold py-2 px-4 rounded 
           cursor-pointer hover:text-blue-600 transition-all duration-300 ease-in-out"
        onClick={() => {
          alert("Button clicked!");
        }}
      >
        Click me
      </button>
    </div>
  );
}
