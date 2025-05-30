import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="sticky top-0 dark:bg-gray-950 shadow-md z-50 w-full dark:shadow-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Next App
        </Link>
        <div className="flex space-x-6 font-medium text-gray-300">
          <Link href="/users" className="hover:text-blue-500">
            Users
          </Link>
          <Link href="/input" className="hover:text-blue-500">
            Input
          </Link>
        </div>
      </div>
    </nav>
  );
}
