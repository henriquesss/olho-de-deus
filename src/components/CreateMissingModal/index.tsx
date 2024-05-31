"use client";

import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { formatPhoneNumber } from "../../utils";
import { createMissing } from "@ui/repository/missing";
import { IMissing } from "../../types/missing";
import { toast } from "react-toastify";
import { cities } from "../../assets/rs-cities";

interface ICreateEstimateModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
}

type IMissingErrors = {
  recorderName?: string;
  recorderNumber?: string;
  missingName?: string;
  missingNumber?: string;
  missingLastLocal?: string;
  situation?: string;
};

export const CreateMissingModal = ({
  isOpen,
  onOpenChange,
}: ICreateEstimateModalProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [missingType, setMissingType] = useState("person");
  const [recorderName, setRecorderName] = useState("");
  const [recorderNumber, setRecorderNumber] = useState("");
  const [missingName, setMissingName] = useState("");
  const [missingNumber, setMissingNumber] = useState("");
  const [missingLastLocal, setMissingLastLocal] = useState("");
  const [observation, setObservation] = useState("");
  const [situation, setSituation] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<IMissingErrors>({
    recorderName: "",
    recorderNumber: "",
    missingName: "",
    missingNumber: "",
    missingLastLocal: "",
    situation: "",
  });

  const handleCreate = async (onClose: () => void) => {
    try {
      setLoading(true);
      const err: IMissingErrors = {};

      if (!recorderName)
        err.recorderName =
          "Preencha o nome completo da pessoa que está cadastrando";
      if (!recorderNumber)
        err.recorderNumber =
          "Preencha o número de contato da pessoa que está cadastrando";
      if (!missingName)
        err.missingName = "Preencha o nome completo do desaparecido(a)";
      if (!missingLastLocal)
        err.missingLastLocal = "Preencha o último local do desaparecido(a)";
      if (!situation) {
        err.situation = "Preencha a situação atual do desaparecido(a)";
      }

      if (Object.keys(err).length > 0) {
        setErrors(err);
        setLoading(false);
        return false;
      }

      const data: IMissing = {
        missingType,
        recorderName,
        recorderNumber,
        missingName,
        missingNumber,
        missingLastLocal,
        status: "need_help",
        situation,
        observation,
      };

      await createMissing(data);

      toast("Registro criado com sucesso", { type: "success" });
      setLoading(false);
      onClose();
    } catch (error) {
      console.error(error);
      toast("Erro ao criar registro", { type: "error" });
      setLoading(false);
    }
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        style={{
          color: "#111",
          height: "90%",
          overflow: "auto",
          scrollBehavior: "smooth",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Cadastrar desaparecido
              </ModalHeader>

              <>
                <ModalBody>
                  <h1>Dados da pessoa cadastrante</h1>
                  {errors.recorderName && (
                    <p className="text-red-500">{errors.recorderName}</p>
                  )}
                  <input
                    className="border-1 p-2 rounded"
                    type="text"
                    placeholder="Nome completo"
                    onChange={(event) => setRecorderName(event.target.value)}
                  />

                  {errors.recorderNumber && (
                    <p className="text-red-500">{errors.recorderNumber}</p>
                  )}
                  <input
                    className="border-1 p-2 rounded"
                    type="text"
                    placeholder="Número de contato"
                    onChange={(event) => setRecorderNumber(event.target.value)}
                    onKeyUp={(event) => formatPhoneNumber(event)}
                    maxLength={14}
                  />

                  <h1>Dados do desaparecido</h1>
                  {errors.missingName && (
                    <p className="text-red-500">{errors.missingName}</p>
                  )}
                  <input
                    className="border-1 p-2 rounded"
                    type="text"
                    placeholder="Nome completo"
                    onChange={(event) => setMissingName(event.target.value)}
                  />

                  {missingType === "person" && (
                    <input
                      className="border-1 p-2 rounded"
                      type="text"
                      placeholder="Número de contato"
                      onChange={(event) => setMissingNumber(event.target.value)}
                      onKeyUp={(event) => formatPhoneNumber(event)}
                      maxLength={14}
                    />
                  )}

                  {errors.missingLastLocal && (
                    <p className="text-red-500">{errors.missingLastLocal}</p>
                  )}
                  <select
                    id="status-select"
                    value={missingLastLocal}
                    onChange={(event) => {
                      setMissingLastLocal(event?.target.value);
                    }}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="">Selecione o Local</option>
                    {cities.map((city, index) => (
                      <option key={index} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>

                  {errors.situation && (
                    <p className="text-red-500">{errors.situation}</p>
                  )}
                  <select
                    id="status-select"
                    value={situation}
                    onChange={(event) => {
                      setSituation(event?.target.value);
                    }}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="">Selecione a situação</option>
                    <option value="missing">Desaparecido</option>
                    <option value="islanded">Ilhado</option>
                    <option value="sheltered">Abrigado</option>
                  </select>

                  <hr />

                  <textarea
                    className="border-1 p-2 rounded"
                    placeholder="Observações"
                    onChange={(event) => setObservation(event.target.value)}
                  />
                </ModalBody>
                <ModalFooter>
                  <Button variant="light" onPress={onClose}>
                    Cancel
                  </Button>
                  {loading ? (
                    <Button className="bg-orange-600 text-white" disabled>
                      Carregando...
                    </Button>
                  ) : (
                    <Button
                      className="bg-orange-600 text-white"
                      onPress={() => handleCreate(onClose)}
                    >
                      Cadastrar
                    </Button>
                  )}
                </ModalFooter>
              </>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
