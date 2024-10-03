"use client";

import { Card } from "@/components/ui/card";

export function PastProjects() {
  return (
    <section className="w-full bg-[#080808] px-4 md:px-16 py-12 ">
      <h2 className="text-2xl md:text-[40px] font-light mb-6 text-white">
        Diann's past projects
      </h2>
      <p className="text-gray-400 text-2xl mb-6">
        Real SystemVerilog tasks engineers gave to Diann.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3].map((project) => (
          <Card key={project} className="p-4">
            <div className="w-full aspect-[3/4] bg-white/10 backdrop-filter backdrop-blur-lg flex items-center justify-center text-gray-400">
              Project {project}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
