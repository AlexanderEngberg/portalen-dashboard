import React, { ReactElement, useState } from "react";
import Image from "next/image";
import { useGetHeaderQuery } from "@/generated";
import * as Collapsible from "@radix-ui/react-collapsible";

import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";

export function Nav(): ReactElement {
  const [open, setOpen] = useState(false);
  const { data } = useGetHeaderQuery({
    variables: { id: "7np6tnJuMcAEc5AhQkpMwk" },
  });
  const header = data?.header || {};
  return (
    <>
      <Collapsible.Root className="sm:hidden">
        <div className="flex justify-between p-2 bg-main">
          <div className="flex items-center">
            <Image
              loader={() => header.image?.url || ""}
              src={header.image?.url || ""}
              width={0}
              height={0}
              alt={header.image?.title || ""}
              className="h-16 w-16"
            />
            <p className="text-xl text-secondary font-bold ml-2">
              {header.label || "Portalen"}
            </p>
          </div>
          <Collapsible.Trigger asChild>
            <button className="" onClick={() => setOpen(!open)}>
              {open ? (
                <XMarkIcon className="h-8 w-8 text-secondary" />
              ) : (
                <Bars3Icon className="h-8 w-8 text-secondary" />
              )}
            </button>
          </Collapsible.Trigger>
        </div>
        <Collapsible.Content
          className={
            "overflow-hidden z-10 w-screen max-w-full absolute bg-main shadow-xl duration-500 ease-in-out transition-all transform" +
            (open
              ? "duration-500 translate-y-0 "
              : "duration-500 translate-y-full")
          }
        ></Collapsible.Content>
      </Collapsible.Root>
    </>
  );
}
