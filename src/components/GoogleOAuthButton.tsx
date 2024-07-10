"use client";

import { Button } from "./ui/button";
import { RiGoogleFill } from "@remixicon/react";

const GoogleOAuthButton = () => {
  return (
    <Button
      onClick={() => {
        console.log("Logging in with google");
      }}
    >
      <RiGoogleFill className="w-4 h-4 mr-2" />
      Continue with Google
    </Button>
  );
};

export default GoogleOAuthButton;
