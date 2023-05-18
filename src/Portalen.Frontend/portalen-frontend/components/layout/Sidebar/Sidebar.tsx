"use client";
import Image from "next/image";
import React, { ReactElement } from "react";
import { useGetHeaderQuery } from "@/generated";

import { HomeIcon } from "@heroicons/react/24/solid";

export function Sidebar(): ReactElement {
  const { data } = useGetHeaderQuery({
    variables: { id: "7np6tnJuMcAEc5AhQkpMwk" },
  });
  const header = data?.header || {};
  //shrink-0 whitespace-nowrap box-border overflow-x-hidden permanent
  return (
    <div className="max-sm:hidden relative inset-y-0 w-20 bg-main transition-all duration-500 ease-in-out hover:w-64">
      <div className="p-2 fixed">
        <div className="relative overflow-hidden">
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
              {header.label || "P"}
            </p>
          </div>
          <nav className="mt-6 ml-2">
            <a
              className="flex items-center rounded-lg hover:bg-white-20 px-3"
              href="#"
            >
              <HomeIcon className="h-6 w-6 text-secondary" />
              <span className="overflow-hidden text-sm text-secondary m-5">
                Overview
              </span>
            </a>
            <a
              className="flex items-center rounded-lg hover:bg-white-20 px-3"
              href="#"
            >
              <HomeIcon className="h-6 w-6 text-secondary" />
              <span className="text-sm text-secondary m-5">Overview</span>
            </a>
            <a
              className="flex items-center rounded-lg hover:bg-white-20 px-3"
              href="#"
            >
              <HomeIcon className="h-6 w-6 text-secondary" />
              <span className="text-sm text-secondary m-5">Overview</span>
            </a>
            <a
              className="flex items-center rounded-lg hover:bg-white-20 px-3"
              href="#"
            >
              <HomeIcon className="h-6 w-6 text-secondary" />
              <span className="text-sm text-secondary m-5">Overview</span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
