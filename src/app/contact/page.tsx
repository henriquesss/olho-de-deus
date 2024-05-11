import React from "react";
import { Header } from "@components/Header";

export default function ContactPage() {
  return (
    <>
      <Header />
      <article>
        <div className="container mx-auto py-5">
          <p className="text-2xl mb-2 font-bold">Contato</p>
          <p className="mb-4">
            Se você tem alguma dúvida, sugestão, reclamação, problemas de
            segurança ou outro tipo de mensagem, pode enviar um email para:
          </p>
          <p className="mb-4">contato@olhodedeus.org</p>
          <p>Ou entrar em contato pelo instagram @olhodedeus.rs</p>
        </div>
      </article>
    </>
  );
}
