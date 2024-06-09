import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <section className="px-3 py-10">
      <span className="text-gray-500 ">Contact Us</span>
      <h2 className="uppercase text-2xl tracking-wide font-bold mt-1 max-w-4xl">
        We COMBINE THE CLASSIC KNOWLEDGE OF TRADITIONAL PORTRAITURE WITH AN
        INNOVATIVE AND CONTEMPORARY STYLE.
      </h2>
      <div className="flex justify-end mt-10">
        <div className="max-w-3xl">
          <p className="mb-5">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expounds.d. I must explain to you how all
            this mistaken idea.
          </p>
          <Link href={""} className="capitalize text-white/50 hover:text-white">
            get in touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
