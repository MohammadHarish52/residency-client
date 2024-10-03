"use client";

import { Button } from "@/components/ui/button";

export function TryDiannCta() {
  return (
    <div className="w-full h-screen bg-[#080808] flex items-center justify-center p-4 border-b border-[#212121]">
      <div className="w-full max-w-5xl aspect-[20/8] bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg flex items-center justify-center p-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-[64px] font-thin mb-8 leading-tight text-white">
            Use Diann to solve difficult circuit design problems.
          </h2>
          <Button className="bg-white hover:bg-pink-600 hover:text-[#fff] text-[#080808] font-medium py-2 px-6 rounded-full  text-lg">
            Try Diann
          </Button>
        </div>
      </div>
    </div>
  );
}
