// This file is used to handle 404 errors in a Next.js application.
import Image from "next/image";
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-600 w-full h-screen">
      <Image
        src="/assets/404-error.png"
        alt="Not Found"
        width={300}
        height={300}
      />
      <h1 className="text-4xl font-bold mb-4 text-white">
        404 - Page Not Found
      </h1>
      <p className="text-lg text-white">
        The page you are looking for does not exist.
      </p>
    </div>
  );
}
