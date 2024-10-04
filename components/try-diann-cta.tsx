"use client";

import { Button } from "@/components/ui/button";

export function TryDiannCta() {
  return (
    <div className="w-full bg-[#080808] flex items-center justify-center p-4 sm:p-8 pb-8 sm:pb-16 border-b border-[#212121]">
      <div className="w-full max-w-5xl aspect-[20/8] bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg flex items-center justify-center">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl sm:text-3xl lg:text-[64px] font-regular mb-4 sm:mb-8 leading-tight sm:leading-snug lg:leading-normal text-white">
            Use Diann to solve difficult circuit design problems.
          </h2>
          <Button className="bg-white hover:bg-pink-600 hover:text-[#fff] text-[#080808] font-medium py-2 px-4 sm:px-6 rounded-full text-base sm:text-lg">
            Try Diann
          </Button>
        </div>
      </div>
    </div>
  );
}
