"use client";

import React, { ReactNode, use, useEffect, useState } from "react";
import { ModeToggle } from "./theme-button";
import {
  ArrowLeftRight,
  CircleUser,
  HelpCircle,
  HomeIcon,
  Instagram,
  LineChart,
  Package2,
  PanelLeftClose,
  PanelLeftOpen,
  Twitter,
  VideoIcon,
  Youtube,
} from "lucide-react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ThemeProvider } from "@/components/global/theme-provider";
import { Separator } from "@/components/ui/separator";

const SideBar = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  let [isActive, setIsActive] = useState(false);
  let icon = isActive ? (
    <PanelLeftOpen className="size-5" />
  ) : (
    <PanelLeftClose className="size-5" />
  );

  const pathname = usePathname();
  const isActiveLinkClass = "bg-muted text-primary";
  const navLinkClass =
    "flex items-center gap-3 px-3 py-2 rounded-lg font-medium text-muted-foreground transition-all hover:text-primary focus:bg-muted focus:text-primary";

  return (
    <body className="h-screen">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="flex flex-col h-full w-screen">
          <header className="flex border-b justify-between items-center px-6 py-4">
            <div className="flex gap-4 items-center">
              <Link href="#" className="flex items-center gap-3 px-3">
                <Package2 className="size-6" />
                <h1 className="font-medium text-lg">Acme Inc</h1>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                onClick={() => {
                  setIsActive(!isActive);
                }}
              >
                {icon}
                <span className="sr-only">Toggle sidebar</span>
              </Button>
            </div>
            <div className="flex gap-4">
              <ModeToggle />
              <AvatarButton />
            </div>
          </header>
          <div className="flex flex-grow h-full overflow-hidden">
            <aside
              className={`flex flex-col justify-between py-2 border-r transition-all duration-500 ${
                isActive
                  ? "min-w-[0px] max-w-[100px]"
                  : "min-w-[150px] max-w-[500px]"
              }`}
            >
              <nav className="grid items-start font-medium gap-2 lg:px-4">
                <p className="text-muted-foreground text-sm">Main</p>
                <Link
                  href="/"
                  className={`${
                    pathname === "/" ? isActiveLinkClass : ""
                  } ${navLinkClass}`}
                >
                  <HomeIcon className="size-6" />
                  <p className={`${isActive ? "hidden" : ""}`}>Home</p>
                </Link>
                <Link
                  href="/page1"
                  className={`${
                    pathname === "/page1" ? isActiveLinkClass : ""
                  } ${navLinkClass}`}
                >
                  <LineChart className="size-6" />
                  <p className={`${isActive ? "hidden" : ""}`}>Analytics</p>
                </Link>
                <Link
                  href="/page2"
                  className={`${
                    pathname === "/page2" ? isActiveLinkClass : ""
                  } ${navLinkClass}`}
                >
                  <ArrowLeftRight className="size-6" />
                  <p className={`${isActive ? "hidden" : ""}`}>Transactions</p>
                </Link>

                <p className="text-muted-foreground text-sm mt-4">More</p>
                <Link
                  href="#"
                  className={`${
                    pathname === "/help" ? isActiveLinkClass : ""
                  } ${navLinkClass}`}
                >
                  <VideoIcon className="size-6" />
                  <p
                    className={`${
                      isActive ? "hidden opacity-0" : "opacity-100"
                    } transition-all duration-500`}
                  >
                    Tutorial
                  </p>
                </Link>
              </nav>

              {/*   FOOTER   */}
              <div className={`flex flex-col gap-2 justify-center`}>
                <div
                  className={`flex ${
                    isActive ? "flex-col" : ""
                  }  justify-center items-center gap-2`}
                >
                  <Link href="#" className={navLinkClass}>
                    <Youtube className="size-5" />
                  </Link>
                  <Link href="#" className={navLinkClass}>
                    <Instagram className="size-5" />
                  </Link>

                  <Link href="#" className={navLinkClass}>
                    <Twitter className="size-5" />
                  </Link>
                </div>
                <Separator />
                <p className="flex justify-center text-sm truncate">
                  {isActive ? "© 2024" : "© 2024 Acme Inc"}
                </p>
              </div>
            </aside>
            <div className="overflow-scroll flex-grow">{children}</div>
          </div>
        </div>
      </ThemeProvider>
    </body>
  );
};

export default SideBar;

const AvatarButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon" className="rounded-full">
          <CircleUser className="size-5" />
          <span className="sr-only">Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
