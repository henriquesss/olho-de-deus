import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="text-center py-6 bottom-0 left-0 w-full relative bg-gray-200">
      <div className="w-1/3 mx-auto">
        <div className="flex flex-row justify-around flex-wrap mb-2">
          <Link className="underline" href="/motivation">
            motivação
          </Link>
          <a
            className="underline"
            href="https://github.com/henriquesss/olho-de-deus"
            target="_blank"
            rel="noreferrer"
          >
            github
          </a>
          <Link className="underline" href="/contact">
            contato
          </Link>
          <Link className="underline" href="/status">
            Status
          </Link>
        </div>
        <p className="text-sm">
          organizado por{" "}
          <a
            href="https://www.instagram.com/olhodedeus.rs/"
            target="blank"
            className="underline"
          >
            olho de deus
          </a>
        </p>
      </div>
    </div>
  );
};
