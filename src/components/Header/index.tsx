"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CreateMissingModal } from "../CreateMissingModal";
import { useDisclosure } from "@nextui-org/react";

export const Header = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="container mx-auto py-5 text-sm">
      <CreateMissingModal isOpen={isOpen} onOpenChange={onOpenChange} />
      <div className="flex justify-around items-center">
        <div className="text-white font-bold">
          <Link href="/">
            <Image
              src="/logo-olho-2.png"
              width={50}
              height={50}
              alt="God eye logo"
              className="rounded-2xl"
            />
          </Link>
        </div>

        <div className="flex flex-row items-center">
          <>
            <button
              onClick={() => onOpen()}
              className="text-sm mx-1 bg-orange-500 p-2 text-white font-bold rounded"
            >
              CADASTRAR
            </button>
          </>
        </div>
      </div>
    </div>
  );
};
