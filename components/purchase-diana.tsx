"use client";

import { Card } from "@/components/ui/card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useEffect } from "react";

export function PurchaseDiana() {
  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaX > 0) {
        sliderRef.current?.slickNext();
      } else if (e.deltaX < 0) {
        sliderRef.current?.slickPrev();
      }
    };

    const sliderElement = sliderRef.current?.innerSlider?.list;
    if (sliderElement) {
      sliderElement.addEventListener(
        "wheel",
        (e: Event) => handleWheel(e as WheelEvent),
        { passive: false }
      );
    }

    return () => {
      if (sliderElement) {
        sliderElement.removeEventListener(
          "wheel",
          handleWheel as EventListener
        );
      }
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    draggable: true,
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
      <Slider ref={sliderRef} {...settings}>
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
