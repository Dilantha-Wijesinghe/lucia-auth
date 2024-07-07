import SignOutButton from "@/components/SignOutButton";
import { getUser } from "@/lib/lucia";
import { redirect } from "next/navigation";

const DashboardPage = async () => {
  const user = await getUser();
  if (!user) {
    redirect("/authenticate");
  }
  return (
    <>
      <div>
        Your are logged in as {user.name} ({user.email})
      </div>
      <SignOutButton>Sign Out</SignOutButton>
    </>
  );
};

export default DashboardPage;
