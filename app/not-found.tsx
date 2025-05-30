// This file is used to handle 404 errors in a Next.js application.
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-600 w-full h-screen">
      <img
        src="/assets/404-error.png"
        alt="Not Found"
        className="mb-6 w-l h-1/4 object-fill rounded-lg"
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
