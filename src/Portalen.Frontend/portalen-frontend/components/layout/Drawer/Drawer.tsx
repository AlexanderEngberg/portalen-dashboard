"use client";
import React, { ReactElement, useState } from "react";

import { XMarkIcon } from "@heroicons/react/24/solid";
import { HomeIcon } from "@heroicons/react/24/solid";

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
          <div className="px-3 py-7">
            <div className="flex justify-between">
              <header className="text-secondary font-bold text-lg">
                Header
              </header>
              <button onClick={() => setIsOpen(false)}>
                <XMarkIcon className="h-8 w-8 text-secondary" />
              </button>
            </div>
            <nav className="mt-7">
              <a
                onClick={() => {
                  setIsOpen(false);
                }}
                className="flex items-center rounded-lg hover:bg-white-20 px-4 py-3 mb-3"
                href="#"
              >
                <HomeIcon className="overflow-visible h-6 w-6 text-secondary" />
                <span className="overflow-hidden text-m text-secondary ml-4">
                  Overview
                </span>
              </a>
            </nav>
          </div>
          <div className="border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-gray-400 h-12 w-12"></div>
              <div className="flex-1 space-y-4 py-1">
                <div className="h-4 bg-gray-400 rounded w-3/4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-400 rounded"></div>
                  <div className="h-4 bg-gray-400 rounded w-5/6"></div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}
