import React from "react";
import { Header } from "@components/Header";

export default function StatusPage() {
  return (
    <>
      <Header />
      <article>
        <div className="container mx-auto py-5 h-[600px]">
          <h1 className="text-2xl">Status da plataforma</h1>
          <p>Em breve:</p>
          <p>Total de usuários</p>
          <p>Total de pessoas desaparecidas cadastradas</p>
          <p>Total de pessoas encontradas</p>
          <p>Total de animais desaparecidos cadastrados</p>
          <p>Total de animais encontrados</p>
          <p>Saúde do servidor</p>
          <p>Lista de contribuidores open-source</p>
        </div>
      </article>
    </>
  );
}
