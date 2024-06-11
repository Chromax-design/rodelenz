"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Image from "next/image";
import { HeroSlider } from "@/constants";

export function Hero() {
  
  const plugin = React.useRef(
    Autoplay({ delay: 10000, stopOnInteraction: true })
  );

  return (
    <Carousel plugins={[plugin.current]} className="min-h-screen [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
      <CarouselContent className="min-h-screen">
        {HeroSlider.map((item) => (
          <CarouselItem key={item.id} className=" relative min-h-screen">
            <div className="min-h-screen relative">
              <Image
                src={`/${item.image}`}
                alt={item.title}
                fill
                className=" object-cover brightness-[0.3]"
              />
            </div>
            <div className="absolute top-0 left-0 w-full h-screen flex place-items-center flex-col px-4 md:px-10">
              <div className="max-w-4xl h-full flex justify-center items-start flex-col mt-20">
                <h1 className="uppercase text-6xl font-bold tracking-wide">
                  <TextGenerateEffect
                    words={item.title}
                    className="uppercase text-4xl md:text-6xl text-white"
                  />
                </h1>
                <p className=" mt-2 mb-4">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
                  blanditiis nesciunt tempore similique labore quod nostrum
                  eligendi, repellendus iste reprehenderit!
                </p>

                <Button variant={"secondary"} className="text-lg capitalize">
                  view
                </Button>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
