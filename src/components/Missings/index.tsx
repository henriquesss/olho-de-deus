"use client";

import React from "react";
import { MissingCard } from "../MissingCard";
import { IMissing } from "../../types/missing";

interface MissingsComponentParams {
  currentList: IMissing[];
}

export const Missings = ({ currentList }: MissingsComponentParams) => {
  return (
    <>
      {currentList.length > 0 && (
        <div className="container mx-auto mb-10">
          <div className="flex flex-wrap justify-around">
            <>
              {currentList.map((missing: IMissing) => (
                <div className="md:w-80 w-full mb-4" key={1}>
                  <MissingCard
                    fullName={missing.missingName}
                    contact={missing.recorderNumber}
                    local={missing.missingLastLocal}
                    situation={missing.situation}
                    observation={missing.observation || ""}
                    moreInfoData={{
                      observation: missing.observation || "",
                      recorderName: missing.recorderName,
                      recorderNumber: missing.recorderNumber,
                      createdAt: missing.createdAt || "",
                    }}
                  />
                </div>
              ))}
            </>
          </div>
        </div>
      )}
    </>
  );
};
