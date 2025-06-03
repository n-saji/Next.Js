import { ClickButton } from "@/app/components/button";
import Navbar from "@/app/components/navbar";
import { BodyPadding, DeleteButton } from "@/app/Global/Styling";
import { Metadata } from "next";
import { UsersData } from "@/app/data/data";

type Props = {
  params: Promise<{ userId: string }>;
};

// imp same name - generateMetadata
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = (await params).userId;
  return {
    title: `User Data Page - ${id}`,
  };
};

export default async function ShowUsersData({ params }: Props) {
  const userId = (await params).userId;
  return (
    <div className="">
      <Navbar />

      {UsersData.filter((user) => user.id === parseInt(userId)).map((user) => {
        return (
          <div
            className={`flex flex-col items-center justify-center  w-full ${BodyPadding}`}
            key={user.id}
          >
            <h1 className="text-2xl font-bold dark:text-gray-100 p-4">
              User ID: {user.id}
            </h1>
            <p className="text-lg dark:text-gray-200  text-center p-1/2">
              This is the user data page for user: {user.name}
            </p>
            <ClickButton
              props={{
                text: "Delete User",
                redirect: `/users`,
                action: "delete",
                id: user.id,
                styling: DeleteButton,
                alertMessage: "Are you sure you want to delete this user?",
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
