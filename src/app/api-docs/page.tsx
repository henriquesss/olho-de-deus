import React from "react";
/* eslint-disable react/no-unescaped-entities */
import { Header } from "@components/Header";

export default function ApiDocsPage() {
  return (
    <>
      <Header />
      <article>
        <div className="container mx-auto py-5 h-[600px]">
          <p className="text-2xl mb-2 font-bold">Documentação da API v2.0.0</p>

          <p className="mb-4">
            Em breve documentação para o consumo da api pública do olho de deus.
          </p>
        </div>
      </article>
    </>
  );
}
