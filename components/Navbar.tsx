"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";
import { NavLinks } from "@/constants";


const Navbar = () => {
  const pathname = usePathname();
  return (
    <header className="absolute top-0 left-0 w-full py-2 px-3 md:px-10 z-10">
      <nav className="hidden md:flex justify-between items-center">
        <span
          className={
            " uppercase font-bold text-white tracking-wider border border-white p-2"
          }
        >
          rodelenz
        </span>
        <div>
          <NavigationMenu>
            <NavigationMenuList>
              {NavLinks.map((item) => {
                const isActive =
                  pathname === item.href ||
                  pathname.startsWith(`${item.href}/`);
                return (
                  <NavigationMenuItem key={item.href}>
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={`${navigationMenuTriggerStyle()} ${cn(
                          "capitalize",
                          { "bg-white text-black": isActive }
                        )}`}
                      >
                        {item.title}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>
      <nav className=" flex justify-between md:hidden">
        <span
          className={
            " uppercase font-bold text-white tracking-wider border border-white p-2 text-sm"
          }
        >
          rodelenz
        </span>
        <Sidebar />
      </nav>
    </header>
  );
};

export default Navbar;
