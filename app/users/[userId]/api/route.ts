import { UsersData } from "@/app/data/data";

export async function DELETE(_request: Request, { params }: { params: Promise<{ userId: string }> }) {
    const { userId } = await params;
    const user_data = UsersData.find(user => user.id === parseInt(userId))
    if (!user_data) {
        return new Response("User not found", { status: 404 });
    }
    UsersData.splice(UsersData.indexOf(user_data), 1);
    return new Response("user deleted successfully", { status: 200 });

}     