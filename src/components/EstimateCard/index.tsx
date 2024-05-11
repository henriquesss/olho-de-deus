import React from "react";

interface EstimateCardParams {
  fullName: string;
  contact: string;
  local: string;
  observations: string;
}

export const EstimativeCard = ({
  fullName,
  contact,
  local,
  observations,
}: EstimateCardParams) => {
  return (
    <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-left">
      <h5 className="mb-2 w-60 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        {fullName}
      </h5>

      <p>{contact}</p>
      <p>{local}</p>
      <p>{observations}</p>
    </div>
  );
};
