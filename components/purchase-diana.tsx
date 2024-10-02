"use client";

import { Card } from "@/components/ui/card";

export function PurchaseDiana() {
  return (
    <section className="w-full px-4 md:px-16 py-12">
      <h2 className="text-2xl md:text-[40px] font-bold mb-6">
        Purchase Diana's toolbox
      </h2>
      <p className="text-gray-600 text-2xl mb-6 ">
        Dianna's uses powerful tools that help you complete tasks faster.You can
        purchase Seperately
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3].map((project) => (
          <Card key={project} className="p-4">
            <div className="w-full aspect-[3/4] bg-gray-100 flex items-center justify-center text-gray-400">
              Project {project}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
