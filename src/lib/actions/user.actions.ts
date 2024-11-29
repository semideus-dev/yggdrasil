import { db } from "@/lib/db";

interface UserProps {
  clerkId: string;
  email: string;
  username: string;
}

export const createUser = async ({ clerkId, email, username }: UserProps) => {
  const user = await db.user.create({
    data: {
      clerkId,
      email,
      username,
    },
  });

  return user;
};