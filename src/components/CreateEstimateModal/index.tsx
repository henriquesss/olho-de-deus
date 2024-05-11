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

interface ICreateEstimateModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
}
// type INewErrors = {
//   description?: string;
//   stack?: string;
//   devs?: string;
//   time?: string;
// };

export const CreateEstimateModal = ({
  isOpen,
  onOpenChange,
}: ICreateEstimateModalProps) => {
  const handleCreate = async (onClose: () => void) => {
    try {
      // // If there are errors, set them in the state
      // if (Object.keys(newErrors).length > 0) {
      //   setErrors(newErrors);
      //   return false;
      // } else {
      //   // Everything is ok
      //   alert("chama o serviço de salvar");

      //   onClose();
      // }
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Cadastrar
              </ModalHeader>

              <>
                <ModalBody>
                  <p>Preencha os dados da pessoa ou animal desaparecido</p>
                  <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                    <input
                      id="bordered-radio-1"
                      type="radio"
                      value=""
                      name="bordered-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="bordered-radio-1"
                      className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Pessoa
                    </label>
                  </div>
                  <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                    <input
                      checked
                      id="bordered-radio-2"
                      type="radio"
                      value=""
                      name="bordered-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="bordered-radio-2"
                      className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Animal
                    </label>
                  </div>

                  <input
                    className="border-1 p-2 rounded"
                    type="text"
                    placeholder="Nome completo"
                    // onChange={(event) => setStackString(event.target.value)}
                  />

                  <input
                    className="border-1 p-2 rounded"
                    type="text"
                    placeholder="Número de contato"
                    // onChange={(event) => setStackString(event.target.value)}
                  />

                  <input
                    className="border-1 p-2 rounded"
                    type="text"
                    placeholder="Local (bairro ou cidade)"
                    // onChange={(event) => setStackString(event.target.value)}
                  />
                  <textarea
                    className="border-1 p-2 rounded"
                    placeholder="Observações"
                  />
                </ModalBody>
                <ModalFooter>
                  <Button variant="light" onPress={onClose}>
                    Cancel
                  </Button>
                  <Button
                    className="bg-orange-600 text-white"
                    onPress={() => handleCreate(onClose)}
                  >
                    Cadastrar
                  </Button>
                </ModalFooter>
              </>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
