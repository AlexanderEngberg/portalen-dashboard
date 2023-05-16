"use client";
import { useGetHeaderQuery } from "@/generated";
import React, { ReactElement, useState } from "react";

export function Kaka(): ReactElement {
  const { data, loading, error } = useGetHeaderQuery({
    variables: { id: "7np6tnJuMcAEc5AhQkpMwk" },
  });
  const header = data?.header || {};
  return <>{header.label || ""}</>;
}
