"use client";
import Image from "next/image";
import React, { ReactElement, useState } from "react";
import { useGetHeaderQuery } from "@/generated";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { Drawer } from "../Drawer";

export function Navbar(): ReactElement {
  const [open, setOpen] = useState(false);
  const { data } = useGetHeaderQuery({
    variables: { id: "7np6tnJuMcAEc5AhQkpMwk" },
  });
  const header = data?.header || {};
  return (
    <div>
      <nav className="sm:hidden flex justify-between items-center p-2 bg-main">
        <div className="flex items-center">
          <Image
            loader={() => header.image?.url || ""}
            src={header.image?.url || ""}
            width={0}
            height={0}
            alt={header.image?.title || ""}
            className="h-16 w-16"
          />
          <p className="text-xl text-secondary font-bold">
            {header.label || "Portalen"}
          </p>
        </div>
        <button className="" onClick={() => setOpen(!open)}>
          <Bars3Icon className="h-8 w-8 text-secondary" />
        </button>
      </nav>
      <Drawer isOpen={open} setIsOpen={setOpen} />
    </div>
  );
}
