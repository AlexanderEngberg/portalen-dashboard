"use client";
import React, { ReactElement, useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";

export interface DrawerProps {
  isOpen: Boolean;
  setIsOpen: Function;
}
export function Drawer({ isOpen, setIsOpen }: DrawerProps): ReactElement {
  return (
    <div
      className={
        "fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out" +
        (isOpen
          ? "transition-opacity opacity-100 duration-500 -translate-y-0 "
          : "transition-all delay-500 opacity-0 -translate-y-full")
      }
    >
      <section
        className={
          "w-screen max-w-full right-0 absolute bg-white-default h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform" +
          (isOpen ? "translate-y-1 " : "-translate-y-full")
        }
      >
        <article className="relative w-full pb-10 flex flex-col space-y-6 h-full">
          <div className="flex justify-between items-center">
            <header className="p-4 font-bold text-lg">dsdHeader</header>
            <button className="" onClick={() => setIsOpen(false)}>
              <Bars3Icon className="h-8 w-8 text-black" />
            </button>
          </div>
        </article>
      </section>
      <section
        className="w-screen h-full cursor-pointer"
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </div>
  );
}
