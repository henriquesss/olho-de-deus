"use client";

import { useEffect, useState } from "react";
import { Missings } from "../components/Missings";
import { Header } from "@components/Header";
import React from "react";
import Image from "next/image";
import { getMissings } from "@ui/repository/missing";
import { IMissing } from "../types/missing";

export default function Home() {
  const [currentMissingList, setCurrentMissingList] = useState<IMissing[]>();
  const [pages, setPages] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchText, setSearchText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    loadData(1);
  }, []);

  const loadData = (page: number, searchParam?: string) => {
    setLoading(true);
    getMissings(page, 10, searchParam)
      .then((response) => {
        setLoading(false);
        const pagesList = mountPageNavigation(response.pages);
        setCurrentMissingList(response.missings);
        setPages(pagesList);
        setCurrentPage(page);
      })
      .catch((error) => {
        setLoading(false);
        // eslint-disable-next-line no-console
        console.log(error);
      });
  };

  const mountPageNavigation = (totalPages: number): number[] => {
    const navigationList = [];

    for (let index = 0; index < totalPages; index++) {
      navigationList.push(index + 1);
    }

    return navigationList;
  };

  const handleNavigation = (page: number) => {
    loadData(page);
    window.scrollTo(0, 150);
  };

  const handleSearch = async () => {
    if (!searchText) {
      loadData(1);
    } else {
      loadData(1, searchText);
    }
  };

  return (
    <>
      <div className="w-full h-96 bg-diamond-green">
        <Header />
        <section className="mb-16">
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/logo-redondo.png"
              width={140}
              height={140}
              alt="God eye logo"
              className="rounded-2xl mb-4"
            />
            <h1 className="text-white text-2xl font-bold">
              Olho de deus <span className="text-sm text-gray-300">2.2.0</span>
            </h1>
            <p className="w-96 text-center text-white">
              Busque ou registre pessoas desaparecidos nas enchentes do Rio
              Grande do Sul
            </p>
          </div>

          <div className="flex justify-center items-center mt-6">
            <input
              className="p-4 rounded w-1/2 shadow-lg text-black"
              type="text"
              placeholder="Digite o nome da pessoa..."
              onChange={(event) => setSearchText(event.target.value)}
              value={searchText}
            />
          </div>

          <div className="flex justify-center items-center mt-4 text-white">
            <button
              onClick={() => handleSearch()}
              className="bg-orange-500 text-white p-2 rounded font-bold"
            >
              Pesquisar
            </button>
            {searchText.length > 0 && (
              <button
                onClick={() => setSearchText("")}
                className="ml-3 bg-orange-500 text-white p-2 rounded font-bold"
              >
                Limpar pesquisa
              </button>
            )}
          </div>
        </section>
      </div>
      <main className="flex flex-col justify-center items-center p-24">
        <div className="container mx-auto text-center">
          <section>
            {loading && (
              <h1 className="text-center text-white">Carregando...</h1>
            )}

            {currentMissingList && !loading && (
              <Missings currentList={currentMissingList} />
            )}
          </section>
        </div>

        <div>
          {pages.map((page) => (
            <button
              onClick={() => handleNavigation(page)}
              className={`mr-2 underline ${
                currentPage == page ? "text-orange-500" : "text-white"
              }`}
              key={page}
            >
              {page}
            </button>
          ))}
        </div>
      </main>
    </>
  );
}
