import Link from "next/link";
import React from "react";
import Navbar from "../components/navbar";
import { BodyPadding } from "../Global/Styling";
import { UsersData } from "../data/data";

export const metadata = {
  title: "Users Page",
};

export default async function Users() {
  // Simulating an error condition
  // let num = Math.random();
  // console.log("Random number generated:", num);
  // if (num < 0.5) {
  //   throw new Error("An error occurred while fetching users data");
  // }

  // Simulating a delay to mimic data fetching or processing
  // await new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve("Data fetched successfully");
  //   }, 1000);
  // });

  return (
    <div className="">
      <Navbar />

      <div
        className={`flex flex-col items-center justify-center w-full ${BodyPadding}`}
      >
        <h1 className="text-4xl font-bold mb-4 dark:text-gray-100">
          Users Page
        </h1>
        <p className="text-lg dark:text-gray-200">This is the users page.</p>
        <div className="grid grid-cols-4 md:grid-cols-3 lg:grid-cols-2 gap-4 mt-6">
          {UsersData.map((user) => (
            <div
              key={user.id}
              className="text-sm dark:text-gray-300 mb-2 hover:text-blue-500"
            >
              <Link href={`/users/${user.id}`}>User {user.id} </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
