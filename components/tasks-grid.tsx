"use client";

import { Button } from "@/components/ui/button";

export function TasksGrid() {
  return (
    <div className="w-full bg-[#080808] max-w-full p-4 md:px-16 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Common card styles */}
        <div className="bg-[#00CFAA] p-4 rounded-lg shadow text-white">
          <p className="text-lg lg:text-[65px] font-semibold leading-tight">
            "Connect an AXI peripheral controller to my RISC-V core."
          </p>
        </div>
        <div className="bg-[#00CFAA] p-4 rounded-lg shadow text-white">
          <p className="text-lg lg:text-[65px] font-semibold leading-tight">
            "Test a matmul design on a Xilinx Artix-7 FPGA."
          </p>
        </div>
        <div className="bg-[#00CFAA] p-4 rounded-lg shadow flex flex-col justify-between lg:row-span-2 text-white">
          <p className="text-lg lg:text-2xl font-semibold mb-4">
            "Design a parameterized ALU (boilerplate)."
          </p>
          <Button className="w-full bg-[#FF00E5] hover:bg-fuchsia-600 text-white  py-2 px-4 rounded-full text-sm mt-4">
            Ask Diann something now.
          </Button>
        </div>
        <div className="lg:col-span-2 bg-[#00CFAA] p-6 rounded-lg shadow text-white">
          <h2 className="text-xl lg:text-[96px] font-semibold leading-tight">
            "Design Nvidia's H100 GPU from scratch."
          </h2>
        </div>
      </div>
    </div>
  );
}
