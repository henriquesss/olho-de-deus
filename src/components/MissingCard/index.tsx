import React from "react";

interface EstimateCardParams {
  fullName: string;
  contact: string;
  local: string;
  observations: string;
}

export const MissingCard = ({
  fullName,
  contact,
  local,
  observations,
}: EstimateCardParams) => {
  return (
    <div className="w-full p-6 rounded-lg shadow-2xl bg-black text-left">
      <h5 className="mb-2 w-60 text-xl font-bold tracking-tighttext-white">
        {fullName}
      </h5>

      <p>{contact}</p>
      <p>{local}</p>
      <p>{observations}</p>
    </div>
  );
};
