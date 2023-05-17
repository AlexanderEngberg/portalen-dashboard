"use client";
import { Inter } from "next/font/google";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "../clients/apolloClient";
import { Navbar, Sidebar, Toolbar } from "@/components/layout";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ApolloProvider client={apolloClient}>
        <body className={inter.className}>
          <div className="sm:flex h-full">
            <Navbar />
            <Sidebar />
            <main className="p-2 w-full">
              <Toolbar />
              {children}
            </main>
          </div>
        </body>
      </ApolloProvider>
    </html>
  );
}
