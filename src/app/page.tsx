"use client";

import { Estimates } from "../components/Estimates";
import { Header } from "@components/Header";
import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-full h-96 bg-slate-900">
        <Header />
        <section className="mb-16">
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/logo-olho-2.png"
              width={140}
              height={140}
              alt="God eye logo"
              className="rounded-2xl mb-4"
            />
            <h1 className="text-white text-2xl font-bold">
              Olho de deus <span className="text-sm text-gray-600">1.0.0</span>
            </h1>
            <p className="w-96 text-center text-white">
              Busque pessoas e animais desaparecidos nas enchentes do Rio Grande
              do Sul logo abaixo    
            </p>
          </div>

          <div className="flex justify-center items-center mt-6">
            <input
              className="p-4 rounded w-1/2 shadow-lg"
              type="text"
              placeholder="Pesquisar..."
            />
          </div>

          <div className="flex justify-center items-center mt-4 text-white">
            <button>Pesquisar</button>
          </div>
        </section>
      </div>
      <main className="flex flex-col justify-center items-center p-24">
        <div className="container mx-auto text-center">
          <section>
            <Estimates limitParam={9} />
          </section>
        </div>
      </main>
    </>
  );
}
