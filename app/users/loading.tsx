import Navbar from "../components/navbar";

export default function Loading() {
  return (
    <>
      <div className="">
        <Navbar />
        <div className="w-full flex items-center justify-center">
          <h1 className="text-4xl text-white">Loading...</h1>
        </div>
      </div>
    </>
  );
}
