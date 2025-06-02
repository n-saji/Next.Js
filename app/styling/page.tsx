import Navbar from "../components/navbar";

export default function LearnStyling() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar />
      <div
        className="w-1/2 min-md:w-1/3 flex justify-center items-center shadow-xl ring-1 shadow-slate-800
      my-16 p-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600
      border border-purple-700 hover:border-green-500 transition-colors duration-300"
      >
        <p className="text-m min-md:text-2xl min-lg:text-3xl font-sans font-bold text-white">
          A beautiful text
        </p>
      </div>

      <div className="animated-gradient-border">Glowing</div>
    </div>
  );
}
