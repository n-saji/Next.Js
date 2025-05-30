import { Navbar } from "@/app/page";

export default async function ShowUsersData({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const userId = (await params).userId;
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center bg-gray-100 w-full h-screen">
        <h1 className="text-2xl font-bold">User ID: {userId}</h1>
        <p className="text-lg">
          This is the user data page for user with ID: {userId}
        </p>
      </div>
    </div>
  );
}
