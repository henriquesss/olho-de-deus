import React from "react";
/* eslint-disable react/no-unescaped-entities */
import { Header } from "@components/Header";

export default function MotivationPage() {
  return (
    <>
      <Header />
      <article>
        <div className="container mx-auto py-5 h-[600px]">
          <p className="text-2xl mb-2 font-bold">Motivação</p>

          <p className="mb-4">
            Visando ajudar o povo gaúcho em relação as enchentes que estão
            ocorrendo atualmente no estado, a plataforma/ferramenta OLHO DE DEUS
            foi criada.
          </p>
          <p className="mb-4">
            Guiados por uma tecnologia social alinhada a propósito com o intuito
            de restabelecer o bem-estar do povo gaúcho, queremos impactar o
            estado de maneira positiva através da conexão entre pessoas e
            tecnologia.
          </p>
          <p className="mb-4">
            Acreditamos no poder da união entre cérebros, corações e máquinas
            para um novo RS surgir mais forte, aguerrido e unido.
          </p>
          <p className="mb-4">
            Ajude o OLHO DE DEUS a estar presente em todos os cantos do estado
            para cuidar do nosso povo gaúcho e dos nossos animais.
          </p>
          <p>Juntos somos mais FORTES 👁️</p>
        </div>
      </article>
    </>
  );
}
