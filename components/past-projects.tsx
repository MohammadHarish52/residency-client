"use client";

import { useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function PastProjects() {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3.5, // Changed from 3.5 to 3
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

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (sliderRef.current) {
        if (e.deltaX > 0) {
          sliderRef.current.slickNext();
        } else if (e.deltaX < 0) {
          sliderRef.current.slickPrev();
        }
      }
    };

    const sliderElement = document.querySelector(".slick-list");
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

  return (
    <section className="w-full bg-[#080808] px-4 md:px-16 py-12">
      <h2 className="text-2xl md:text-[40px] font-semibold mb-6 text-white">
        Diann's past projects
      </h2>
      <p className="text-white font-normal text-2xl mb-16">
        Real SystemVerilog tasks engineers gave to Diann.
      </p>
      <div className="pl-0 md:pl-[62.5px] relative">
        <Slider ref={sliderRef} {...settings}>
          {[1, 2, 3, 4, 5, 6].map((project) => (
            <div key={project} className="px-2">
              <Card className="w-full aspect-[3/4] md:w-[325px] md:h-[420px] rounded-sm flex items-center justify-center text-white bg-gray-200">
                <div className="text-center bg-white"></div>
              </Card>
            </div>
          ))}
        </Slider>
        <div className="hidden md:block absolute top-0 right-0 bottom-0 w-[162.5px] bg-gradient-to-l from-[#080808] to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
}
