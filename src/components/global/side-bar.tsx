"use client";

import React, { ReactNode, use, useEffect, useState } from "react";
import { ModeToggle } from "./theme-button";
import {
  CircleUser,
  HomeIcon,
  Package2,
  PanelLeftClose,
  PanelLeftIcon,
  PanelLeftOpen,
} from "lucide-react";

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
import Home from "@/app/page";

const SideBar = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  let [isActive, setIsActive] = useState(false);
  let [sidebarWidth, setSidebarWidth] = useState(300);
  let icon = isActive ? (
    <PanelLeftOpen className="size-5" />
  ) : (
    <PanelLeftClose className="size-5" />
  );

  useEffect(() => {
    icon = isActive ? (
      <PanelLeftOpen className="size-5" />
    ) : (
      <PanelLeftClose className="size-5" />
    );
    console.log("isActive : " + isActive);
    if (isActive) {
      setSidebarWidth(0);
    } else {
      setSidebarWidth(300);
    }
  }, [isActive]);
  return (
    <body className="h-screen min-h-screen max-h-screen">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="flex h-screen w-screen">
          <div
            className="transition-all h-full border-r"
            style={{ width: sidebarWidth + "px" }}
          >
            {/*<div className="flex gap-2 my-6 mx-8 items-center">
              <Package2 className="size-6" />
              <h1 className="font-medium text-lg">Dashboard</h1>
            </div>*/
            }
            {/*<div className="grid grid-cols-2 h-full gap-4">
              <div className="bg-red-700 columns-1"></div>
              <div className="bg-red-700 columns-2"></div>
              
          </div>*/}
          </div>
          <div className="flex-col flex-grow">
            <header className="flex border-b justify-between items-center px-6 py-4">
              <div className="flex gap-2">
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
            {children}
          </div>
        </div>
      </ThemeProvider>
    </body>
  );
};

export default SideBar;

/*<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="flex h-full gap-4">
          <Navbar />
          <div className="w-full">
            <header className="flex border rounded-lg justify-between items-center my-4 mr-4 px-6 py-4">
              <div className="flex gap-2">
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
            {children}
          </div>
        </div>
      </ThemeProvider>*/

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

const Navbar = () => {
  return <div className="flex h-full w-60 border-r">Salut</div>;
};
