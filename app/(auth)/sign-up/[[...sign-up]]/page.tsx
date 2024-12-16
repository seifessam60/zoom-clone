import { SignUp } from "@clerk/nextjs";
import React from "react";

const SignUpPage = () => {
  return (
    <div>
      <main className="h-screen w-full flex-center">
        <SignUp />
      </main>
    </div>
  );
};

export default SignUpPage;
