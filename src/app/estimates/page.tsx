"use client";

import React from "react";
import { Estimates } from "@components/Estimates";
import { Header } from "@components/Header";

export default function EstimatesPage() {
  return (
    <>
      <Header />
      <main className="flex flex-col justify-center items-center p-24">
        <div className="container mx-auto text-center">
          <section>
            <Estimates />
          </section>
        </div>
      </main>
    </>
  );
}
