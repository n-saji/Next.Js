import Link from "next/link";
import Sidebar from "./sidebar";
import LinkToPage from "./Link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 dark:bg-gray-950 shadow-md z-50 w-full dark:shadow-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-3xl text-blue-600 font-extrabold">
          Next App
        </Link>
        <LinkToPage classname="flex space-x-6 font-medium text-gray-300 max-sm:hidden" />
        <Sidebar />
      </div>
    </nav>
  );
}
