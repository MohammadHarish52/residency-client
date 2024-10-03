"use client";

import { Card } from "@/components/ui/card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function PurchaseDiana() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const cardColors = [
    "bg-[#FF00E5]",
    "bg-gray-700",
    "bg-emerald-600",
    "bg-green-400",
    "bg-yellow-500",
    "bg-orange-500",
  ];

  return (
    <section className="w-full bg-[#080808] px-4 md:px-16 py-12">
      <h2 className="text-2xl md:text-[40px] font-semibold mb-6 text-white">
        Purchase Diann's toolbox
      </h2>
      <p className="text-2xl text-gray-400 font-normal mb-6">
        Diann uses powerful tools to complete tasks, which you can purchase
        separately.
      </p>
      <Slider {...settings}>
        {[1, 2, 3, 4, 5, 6].map((project, index) => (
          <div key={project} className="px-2">
            <Card
              className={`w-full aspect-[3/4] flex items-center justify-center text-white ${
                cardColors[index % cardColors.length]
              }`}
            >
              <div className="text-center"></div>
            </Card>
          </div>
        ))}
      </Slider>
    </section>
  );
}
