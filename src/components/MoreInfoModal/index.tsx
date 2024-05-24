"use client";

import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { formatDate } from "../../utils";

interface IMoreInfoModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
  data: {
    observation?: string;
    recorderName: string;
    recorderNumber: string;
    createdAt: string;
  };
}

export const MoreInfoModal = ({
  isOpen,
  onOpenChange,
  data,
}: IMoreInfoModalProps) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        style={{
          color: "#111",
          height: "70%",
          overflow: "auto",
          scrollBehavior: "smooth",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Mais informações
              </ModalHeader>

              <>
                <ModalBody>
                  <p className="font-bold">Observações</p>

                  <p>{data.observation}</p>

                  <p className="font-bold">Dados da pessoa que cadastrou</p>
                  <p>Nome: {data.recorderName}</p>
                  <p>Número para contato: {data.recorderNumber}</p>

                  <br />
                </ModalBody>
                <ModalFooter>
                  <div className="w-full flex justify-between items-center">
                    <p className="text-left">
                      Cadastro feito em {formatDate(data.createdAt)}
                    </p>
                    <Button
                      className="bg-orange-500 text-white"
                      onPress={onClose}
                    >
                      Voltar
                    </Button>
                  </div>
                </ModalFooter>
              </>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
