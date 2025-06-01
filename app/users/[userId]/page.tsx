import { ClickButton } from "@/app/components/button";
import Navbar from "@/app/components/navbar";
import { BodyPadding, DeleteButton } from "@/app/Global/Styling";
import { Metadata } from "next";

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
      <div
        className={`flex flex-col items-center justify-center  w-full ${BodyPadding}`}
      >
        <h1 className="text-2xl font-bold dark:text-gray-100">
          User ID: {userId}
        </h1>
        <p className="text-lg dark:text-gray-200  ">
          This is the user data page for user with ID: {userId}
        </p>
        <ClickButton
          props={{
            text: "Delete User",
            redirect: "/users",
            styling: DeleteButton,
            alertMessage: "Are you sure you want to delete this user?",
          }}
        />
      </div>
    </div>
  );
}
