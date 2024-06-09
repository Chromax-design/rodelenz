import { PortfolioImages } from "@/constants";
import { cn } from "@/lib/utils";
import React from "react";

const Portfolio = () => {
  return (
    <section className="px-3 py-10">
      <span className="text-gray-500 ">Portfolio</span>
      <h2 className="uppercase text-2xl tracking-wide font-bold mt-1">
        love stories
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-center mt-5 items-center">
        {PortfolioImages.slice(0, 6).map((item, i) => {
          const isEven = i % 2 == 0;
          return (
            <div
              className="group flex justify-center items-center flex-col gap-4"
              key={item.id}
            >
              <div
                className={
                  "group-hover:scale-95 transition-transform duration-700 ease-linear hover:overflow-hidden max-w-sm overflow-hidden"
                }
              >
                <img
                  src={`/pics/${item.image}`}
                  alt={item.caption}
                  className={cn(
                    "group-hover:scale-110 transition-transform duration-700 ease-linear",
                    {
                      "aspect-square object-cover": isEven,
                      "aspect-2-3 object-cover": !isEven,
                    }
                  )}
                />
              </div>
              <span className=" tracking-wider">{item.caption}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
