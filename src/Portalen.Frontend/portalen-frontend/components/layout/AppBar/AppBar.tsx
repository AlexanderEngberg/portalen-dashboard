"use client";
import React, { ReactElement, useState } from "react";
import { useGetHeaderQuery } from "@/generated";
import { Bars3Icon } from "@heroicons/react/24/solid";

export function AppBar(): ReactElement {
  const [open, setOpen] = useState(false);
  const { data } = useGetHeaderQuery({
    variables: { id: "7np6tnJuMcAEc5AhQkpMwk" },
  });
  const header = data?.header || {};
  return (
    <div className="sm:hidden flex p-3 bg-main">
      <div>
        <p className="text-xl text-secondary">{header.label || "Portalen"}</p>
      </div>
      <button className="ml-auto" onClick={() => setOpen(!open)}>
        <Bars3Icon className="h-8 w-8 text-secondary" />
      </button>
    </div>
  );
}
