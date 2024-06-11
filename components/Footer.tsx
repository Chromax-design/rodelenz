import { socials } from "@/constants";
import React from "react";

const Footer = () => {
  return (
    <section className="relative">
      <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4 px-3 pb-20 pt-52 z-10">
        <div className="">
          <span
            className={
              " uppercase text-lg font-bold text-white tracking-wider border border-white p-2"
            }
          >
            rodelenz
          </span>
          <p className="lg:mt-5 text-lg mt-3">
            &copy; Rodelenz industries {new Date().getFullYear()}
          </p>
        </div>
        <div className="flex flex-col lg:gap-5">
          <a
            href="mailto:rodelenz@gmail.com"
            className="hover:brightness-50 transition-all duration-300"
          >
            rodelenz@gmail.com
          </a>
          <a
            href="tel:++2348063080290"
            className="hover:brightness-50 transition-all duration-300"
          >
            0806 308 0290
          </a>
        </div>
        <div className="flex flex-col lg:gap-5">
          <p>Grand Hall - 881 7th Ave</p>
          <p>New York, NY</p>
        </div>
        <div className="flex flex-col gap-5">
          <p>Follow my socials</p>
          <div className="flex gap-3">
            {socials.map((items) => (
              <a
                href={items.link}
                target="_blank"
                key={items.id}
                className=" cursor-pointer hover:brightness-50 transition-all duration-300"
              >
                {items.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <img
        src="/footer-grid.svg"
        alt="footer background"
        className="absolute left-0 w-full object-cover bottom-0  sm:-bottom-48 lg:-bottom-96 min-h-96 brightness-50 z-0"
      />
    </section>
  );
};

export default Footer;
