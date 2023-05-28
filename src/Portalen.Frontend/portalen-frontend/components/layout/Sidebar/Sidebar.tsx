"use client";
import Image from "next/image";
import React, { ReactElement } from "react";
import { useGetHeaderQuery } from "@/generated";

import { HomeIcon } from "@heroicons/react/24/solid";

interface SidebarProps {
  setIsOpen: Function;
  isOpen: Boolean;
}

export function Sidebar({ isOpen, setIsOpen }: SidebarProps): ReactElement {
  const { data } = useGetHeaderQuery({
    variables: { id: "7np6tnJuMcAEc5AhQkpMwk" },
  });
  const header = data?.header || {};
  return (
    <div
      className={
        "max-sm:hidden fixed inset-y-0 bg-main transition-all duration-500 ease-in-out " +
        (isOpen ? "w-64" : "w-24")
      }
      onMouseEnter={() => {
        setIsOpen(true);
      }}
      onMouseLeave={() => {
        setIsOpen(false);
      }}
    >
      <div className="p-4">
        <div className="flex items-center">
          <Image
            loader={() => header.image?.url || ""}
            src={header.image?.url || ""}
            width={0}
            height={0}
            alt={header.image?.title || ""}
            className="h-14 w-14"
          />
          <p className="overflow-hidden text-xl text-secondary font-bold ml-2">
            {header.label || ""}
          </p>
        </div>
        <nav className="mt-8">
          <a
            className="flex items-center rounded-lg hover:bg-white-20 px-4 py-3"
            href="#"
          >
            <HomeIcon className="overflow-visible h-6 w-6 text-secondary" />
            <span className="overflow-hidden text-m text-secondary ml-4">
              Overview
            </span>
          </a>
        </nav>
      </div>
    </div>
  );
}
