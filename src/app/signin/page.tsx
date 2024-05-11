import React from "react";
import { Auth } from "@components/Auth";
import { Header } from "@components/Header";
import Link from "next/link";

export default function SignInPage() {
  return (
    <>
      <Header />
      <section>
        <div className="container mx-auto py-5">
          <div className="flex flex-col items-center justify-center h-[400px]">
            <p className="text-xl font-bold mb-5">Signin</p>
            <Auth type="signin" />
            <div className="underline mt-2">
              <Link href="/signup">Dont have an account? Create now</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
