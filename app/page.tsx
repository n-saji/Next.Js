import Link from "next/link";
import { ClickButton } from "./users/click";

export function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">
          Next App
        </Link>
        <div className="flex space-x-6 font-medium text-gray-700">
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

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col p-6 md:p-24">
        {/* <h1 className="text-4xl mb-6">Next App</h1> */}
        <ClickButton />
      </main>
    </>
  );
}
