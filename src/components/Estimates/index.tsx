"use client";

import React, { useEffect } from "react";
import {
  getDocs,
  collection,
  query,
  limit,
  QuerySnapshot,
} from "firebase/firestore";
import { EstimativeCard } from "../EstimateCard";
import { IEstimate } from "../../interfaces/Estimate";

interface EstimatesComponentParams {
  limitParam?: number;
}

export const Estimates = ({ limitParam }: EstimatesComponentParams) => {
  useEffect(() => {
    const getEstimatives = async () => {
      try {
        // Query aqui
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
            <EstimativeCard
              fullName="Fulano de tal"
              contact="(51) 9 9704-1726"
              local="Abrigo xyz"
              observations="Precisa de resgate rápido"
            />
          </div>

          <div className="md:w-80 w-full mb-4" key={1}>
            <EstimativeCard
              fullName="Fulano de tal"
              contact="(51) 9 9704-1726"
              local="Abrigo xyz"
              observations="Precisa de resgate rápido"
            />
          </div>

          <div className="md:w-80 w-full mb-4" key={1}>
            <EstimativeCard
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
