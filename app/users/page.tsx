import Link from "next/link";
import React from "react";
import Navbar from "../components/navbar";
import { BodyPadding } from "../Global/Styling";

export const metadata = {
  title: "Users Page",
};

export default function Users() {
  return (
    <div className="">
      <Navbar />

      <div className={`flex flex-col items-center justify-center w-full ${BodyPadding}`}>
        <h1 className="text-4xl font-bold mb-4 dark:text-gray-100">
          Users Page
        </h1>
        <p className="text-lg dark:text-gray-200">This is the users page.</p>
        <div className="grid grid-cols-4 md:grid-cols-3 lg:grid-cols-2 gap-4 mt-6">
          {Array.from({ length: 10 }, (_, i) => (
            <div
              key={i}
              className="text-sm dark:text-gray-300 mb-2 hover:text-blue-500"
            >
              <Link href={`/users/${i + 1}`}>User {i + 1} </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
