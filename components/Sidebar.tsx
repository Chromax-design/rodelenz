"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FaBars } from "react-icons/fa6";
import { NavLinks } from "@/constants";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="text-2xl">
        <FaBars />
      </SheetTrigger>
      <SheetContent className="bg-[#161513] text-white">
        <SheetClose asChild>
          <div className=" h-full flex flex-col gap-5 py-5">
            {NavLinks.map((item) => {
              const isActive =
                pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <SheetClose key={item.href} className="w-full" asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      "capitalize text-xl py-2 hover:tracking-wider transition",
                      {
                        " tracking-wider uppercase font-bold transition-all":
                          isActive,
                      }
                    )}
                  >
                    {item.title}
                  </Link>
                </SheetClose>
              );
            })}
          </div>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
