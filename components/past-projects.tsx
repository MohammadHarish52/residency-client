"use client";

import { Card } from "@/components/ui/card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function PastProjects() {
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

  return (
    <section className="w-full bg-[#080808] px-4 md:px-16 py-12">
      <h2 className="text-2xl md:text-[40px] font-semibold mb-6 text-white">
        Diann's past projects
      </h2>
      <p className="text-gray-400 font-normal text-2xl mb-6">
        Real SystemVerilog tasks engineers gave to Diann.
      </p>
      <Slider {...settings}>
        {[1, 2, 3, 4, 5, 6].map((project) => (
          <div key={project} className="px-2">
            <Card className="w-full aspect-[3/4] flex items-center justify-center text-white bg-white">
              <div className="text-center bg-white"></div>
            </Card>
          </div>
        ))}
      </Slider>
    </section>
  );
}
