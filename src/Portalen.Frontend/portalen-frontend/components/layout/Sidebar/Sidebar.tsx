"use client";
import { useGetHeaderQuery } from "@/generated";
import React, { ReactElement } from "react";

export function Sidebar(): ReactElement {
  const { data } = useGetHeaderQuery({
    variables: { id: "7np6tnJuMcAEc5AhQkpMwk" },
  });
  const header = data?.header || {};
  return (
    <div className="max-sm:hidden w-16 h-screen bg-main transition-all duration-500 ease-in-out hover:w-40">
      <p className="text-xl text-secondary">{header.label || "P"}</p>
    </div>
  );
}
