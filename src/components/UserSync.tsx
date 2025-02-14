"use server";

import { createOrUpdateUser } from "@/lib/auth/createOrupdateUser";
import { generateToken } from "@/utils/auth";
import { currentUser } from "@clerk/nextjs/server";

export default async function UserSync() {
  const user = await currentUser();

  if (!user) return null; // ✅ Return null instead of empty JSX

    const token = await generateToken({
      userId: user.id,
      email: user.emailAddresses[0].emailAddress,
      name: `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim(),
    });

  try {
    await createOrUpdateUser({
      id: user.id,
      firstName: user.firstName ?? "",
      lastName: user.lastName ?? "",
      imageUrl: user.imageUrl ?? "",
      externalAccounts: user.externalAccounts?.map((acc) => ({ provider: acc.provider })) ?? [],
      email: user.emailAddresses[0].emailAddress,
      token
    });

    console.log("✅ User sync successful");
  } catch (error) {
    console.error("❌ Error syncing user:", error);
  }

  return null; // ✅ No invalid rendering
}
