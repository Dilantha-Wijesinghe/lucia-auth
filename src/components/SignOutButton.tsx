"use client";

import { signOut } from "@/app/authenticate/auth.action";
import { Button } from "./ui/button";

type Props = {
  children: React.ReactNode;
};

const SignOutButton = ({ children }: Props) => {
  return (
    <Button
      onClick={() => {
        signOut();
      }}
    >
      {children}
    </Button>
  );
};

export default SignOutButton;
