"use client";
import { useGetHeaderQuery } from "@/generated";
import React, { ReactElement, useState } from "react";

export function Header(): ReactElement {
  const { data, loading, error } = useGetHeaderQuery({
    variables: { id: "7np6tnJuMcAEc5AhQkpMwk" },
  });
  const header = data?.header || {};
  return (
    <h1 className="text-3xl font-bold">
      {!loading && <p>{header.label || ""}</p>}
    </h1>
  );
}
