"use client";
import { PortfolioImages, socials } from "@/constants";
import React, { FormEvent } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { FaInstagram } from "react-icons/fa6";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email("Invalid email"),
  message: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const ContactPage = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }
  return (
    <div className="px-3 py-10">
      <section className="h-[70vh] flex flex-col justify-center relative [mask-image:linear-gradient(to_top,transparent,white_20%,white_80%,transparent)]">
        <h1 className=" text-6xl uppercase font-bold tracking-wider text-white">
          contact us
        </h1>
        <img
          src="/footer-grid.svg"
          alt="footer background"
          className="absolute lg:-left-16 w-full h-full object-cover bottom-0 min-h-96 brightness-[0.4] z-0"
        />
      </section>
      <section className="py-10 grid sm:grid-cols-2 lg:grid-cols-3 relative z-10">
        <div className="flex flex-col gap-5 border border-white/40 p-16">
          <h2 className="text-xl tracking-wide">CONTACT</h2>
          <div className="flex flex-col gap-2">
            <a
              href="mailto:rodelenz@gmail.com"
              className="hover:brightness-100 brightness-50 transition-all duration-300 text-sm"
            >
              rodelenz@gmail.com
            </a>
            <a
              href="tel:+2348063080290"
              className="hover:brightness-100 brightness-50 transition-all duration-300 text-sm"
            >
              0806 308 0290
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-5 max-sm:border-x sm:border-y sm:border-r lg:border-r-0 border-white/40 p-16">
          <h2 className="text-xl tracking-wide">ADDRESS</h2>
          <div className="flex flex-col gap-2 text-sm text-white/50">
            <p>Grand Hall - 881 7th Ave</p>
            <p>New York, NY</p>
          </div>
        </div>

        <div className="flex flex-col gap-5 border sm:border-t-0 lg:border-t border-white/40 p-16">
          <h2 className="text-xl tracking-wide">SOCIALS</h2>
          <div className="flex gap-3">
            {socials.map((items) => (
              <a
                href={items.link}
                target="_blank"
                key={items.id}
                className=" cursor-pointer hover:brightness-100 brightness-50 transition-all duration-300"
              >
                {items.icon}
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="py-10 grid md:grid-cols-2 gap-10 lg:gap-20 relative z-10">
        <div>
          <span className="capitalize text-white/50">get in touch</span>
          <h2 className="text-3xl tracking-wide font-semibold">CONTACT US</h2>
          <p className="text-white/50 mt-5 leading-7">
            Thanks so much for considering us to photograph you, it really is
            such an honour. Interested in learning more or just want to say
            hello? Kindly fill out the contact form below and we will contact
            you as soon as possible! We can’t wait to hear from you and capture
            your beautiful story.
          </p>
        </div>
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full lg:w-3/4 space-y-6"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="john doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="john@doe.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Textarea placeholder="Type your message here." />
              <Button
                type="submit"
                variant={"secondary"}
                className="text-black"
              >
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </section>
      <section className="py-10 relative z-10">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-10">
          {PortfolioImages.slice(2, 8).map((item) => {
            return (
              <a href="https://www.instagram.com"
                key={item.id}
                className="aspect-square overflow-hidden relative group"
              >
                <img
                  src={`/pics/${item.image}`}
                  alt=""
                  className="object-cover object-center"
                />
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center group-hover:bg-black/50 transition-all duration-300">
                  <div className="w-16 h-16 rounded-full border border-white flex justify-center items-center scale-0 group-hover:scale-100 transition-transform duration-300">
                  <FaInstagram className="text-2xl" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
