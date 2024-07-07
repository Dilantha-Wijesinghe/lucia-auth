import TabSwitcher from "@/components/TabSwitcher";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import { getUser } from "@/lib/lucia";
import { redirect } from "next/navigation";

const AuthenticatePage = async () => {
  const user = await getUser();
  if (user) {
    return redirect("/dashboard");
  }
  return (
    <div className="relative w-full flex bg-background h-screen">
      <div className="max-w-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <TabSwitcher SignInTab={<SignInForm />} SignUpTab={<SignUpForm />} />
      </div>
    </div>
  );
};

export default AuthenticatePage;
