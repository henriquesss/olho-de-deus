import React from "react";
import { useDisclosure } from "@nextui-org/react";
import { MoreInfoModal } from "@components/MoreInfoModal";

interface IMissingCardParams {
  fullName: string;
  contact: string;
  local: string;
  situation: string;
  observation: string;
  moreInfoData: {
    observation?: string;
    recorderName: string;
    recorderNumber: string;
    createdAt: string;
  };
}

export const MissingCard = ({
  fullName,
  contact,
  local,
  situation,
  moreInfoData,
}: IMissingCardParams) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const getSituationLabel = (situationString: string) => {
    if (situationString === "missing") {
      return (
        <p className="border border-red-600 text-red-600 rounded-xl p-1 w-1/2">
          Desaparecido
        </p>
      );
    } else if (situationString === "islanded") {
      return (
        <p className="border border-orange-600 text-orange-600 rounded-xl p-1 w-1/2">
          Ilhado
        </p>
      );
    } else if (situationString === "sheltered") {
      return (
        <p className="border border-red-600 text-red-600 rounded-xl p-1 w-1/2">
          Em abrigo
        </p>
      );
    } else {
      <p>Indeterminado</p>;
    }
  };

  return (
    <>
      <MoreInfoModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        data={moreInfoData}
      />
      <div className="w-full p-6 rounded-lg shadow-2xl bg-black text-center">
        <div className="mb-2 h-36 w-full flex items-center justify-center">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
            alt="default_picture"
            className="w-36 h-36 rounded-xl"
          />
        </div>

        <h5 className="mb-2 text-xl font-bold tracking-tighttext-white">
          {fullName}
        </h5>

        <p>Contatar: {contact}</p>
        <p className="mb-2">Local: {local}</p>
        <div className="flex justify-center mb-4">
          {getSituationLabel(situation)}
        </div>
        <button className="underline" onClick={() => onOpen()}>
          Mais informações
        </button>
      </div>
    </>
  );
};
