import React from "react";
import { Auth } from "@components/Auth";
import { Header } from "@components/Header";

export default function SignInPage() {
  return (
    <>
      <Header />
      <section>
        <div className="container mx-auto py-5">
          <div className="flex flex-col items-center justify-center h-[400px]">
            <p className="text-xl font-bold mb-5">Create account</p>
            <Auth type="signup" />
          </div>
        </div>
      </section>
    </>
  );
}
