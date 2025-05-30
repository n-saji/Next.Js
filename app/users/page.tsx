import Link from "next/link";
import React from "react";
import { Navbar } from "../page";

export default function Users() {
  return (
    <div>
      <Navbar />

      <div className="flex flex-col items-center justify-center bg-gray-100 w-full h-screen">
        <h1 className="text-4xl font-bold mb-4">Users Page</h1>
        <p className="text-lg">This is the users page.</p>
        <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-1 gap-4 mt-6">
          {Array.from({ length: 10 }, (_, i) => (
            <div key={i} className="text-sm text-gray-700 mb-2">
              <Link href={`/users/${i + 1}`}>User {i + 1} </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
