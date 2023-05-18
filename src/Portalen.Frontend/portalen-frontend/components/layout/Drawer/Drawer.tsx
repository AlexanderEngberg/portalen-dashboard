"use client";
import React, { ReactElement, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

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
          : "transition-opacity opacity-0 duration-500 -translate-y-full")
      }
    >
      <section
        className={
          "w-screen max-w-full right-0 absolute bg-main h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform" +
          (isOpen ? "translate-y-1 " : "translate-y-full")
        }
      >
        <article className="relative w-full pb-10 flex flex-col space-y-6 h-full">
          <div className="p-2">
            <div className="flex justify-between items-center mt-4">
              <header className="text-secondary font-bold text-lg">
                Header
              </header>
              <button onClick={() => setIsOpen(false)}>
                <XMarkIcon className="h-8 w-8 text-secondary" />
              </button>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}
