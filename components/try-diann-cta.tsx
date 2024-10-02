"use client";

import { Button } from "@/components/ui/button";

export function TryDiannCta() {
  return (
    <div className="w-full h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-5xl aspect-[20/8] bg-gray-100 flex items-center justify-center p-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-[64px] font-thin mb-8 leading-tight">
            Use Diann to solve difficult circuit design problems.
          </h2>
          <Button className="bg-pink-500 hover:bg-fuchsia-600 text-white font-semibold py-2 px-6 rounded-md text-lg">
            Try Diann
          </Button>
        </div>
      </div>
    </div>
  );
}
