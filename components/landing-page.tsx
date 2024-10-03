"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-[#080808] flex flex-col">
      <header className="p-4 border-b border-[#212121]">
        <h1 className="text-xl text-white font-semibold">Instachip</h1>
      </header>
      <main className="flex-grow flex items-center justify-center px-4">
        <div className="w-full  text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-[96px] font-thin mb-12 text-white leading-tight">
            The First Ai Hardware Engineer <br />
          </h2>
          <p className="text-lg sm:text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Our agent achieves a score of 100% on Nvidia's VerilogEval
            benchmark. Ask Diann to "connect an AXI peripheral controller to my
            RISC-V core."
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-pink-500 hover:bg-fuchsia-600 text-black font-medium py-2 px-6 rounded-full text-lg">
              Try Diann now
            </Button>
            <Link
              href="#"
              className="text-gray-300 hover:text-gray-500 font-semibold text-lg flex items-center"
            >
              Watch demo
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
