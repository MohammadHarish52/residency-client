"use client";

import Link from "next/link";

export function AchievementBanner() {
  return (
    <div className="w-full bg-[#080808] h-full py-12">
      <div className="max-w-full h-full px-4 md:px-16 py-12">
        <h1 className="text-4xl text-white md:text-5xl  lg:text-[96px] font-semibold mb-6 leading-tight">
          Diann achieves a score <br />
          of 100% on VerilogEval,
          <br />
          <span className="text-[#FF00E5]">
            Nvidia's circuit design <br />
            standard.
          </span>
        </h1>
        <p className="text-lg text-gray-300 lg:text-[40px] mt-12">
          Read our{" "}
          <Link href="#" className=" hover:underline">
            case study with OpenAI
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
