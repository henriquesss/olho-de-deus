"use client";

import React, { useEffect } from "react";
import { MissingCard } from "../MissingCard";
// import { IEstimate } from "../../interfaces/Estimate";

// interface EstimatesComponentParams {
//   limitParam?: number;
// }

export const Missings = () => {
  useEffect(() => {
    const getEstimatives = async () => {
      try {
        // Fetch no GET aqui futuramente
      } catch (error) {
        console.error(error);
      }
    };

    getEstimatives();
  }, []);

  return (
    <div className="container mx-auto mb-10">
      <div className="flex flex-wrap justify-around">
        <>
          <div className="md:w-80 w-full mb-4" key={1}>
            <MissingCard
              fullName="Fulano de tal"
              contact="(51) 9 9704-1726"
              local="Abrigo xyz"
              observations="Precisa de resgate rápido"
            />
          </div>

          <div className="md:w-80 w-full mb-4" key={1}>
            <MissingCard
              fullName="Fulano de tal"
              contact="(51) 9 9704-1726"
              local="Abrigo xyz"
              observations="Precisa de resgate rápido"
            />
          </div>

          <div className="md:w-80 w-full mb-4" key={1}>
            <MissingCard
              fullName="Fulano de tal"
              contact="(51) 9 9704-1726"
              local="Abrigo xyz"
              observations="Precisa de resgate rápido"
            />
          </div>
        </>
      </div>
    </div>
  );
};
