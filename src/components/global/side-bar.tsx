"use client";

import React, { ReactNode, use, useEffect, useState } from "react";
import { ModeToggle } from "./theme-button";
import {
  ArrowDown01,
  ArrowDownIcon,
  ArrowLeftRight,
  ArrowUp,
  ChevronDown,
  CircleUser,
  Crown,
  HelpCircle,
  HomeIcon,
  Info,
  Instagram,
  LineChart,
  Menu,
  Package2,
  PanelLeftClose,
  PanelLeftOpen,
  Stars,
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinkClass =
  "flex items-center gap-3 px-3 py-2 rounded-lg font-medium text-muted-foreground transition-all hover:text-primary focus:bg-muted focus:text-primary";

const isActiveLinkClass = "bg-muted text-primary";

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
  return (
    <body className="h-screen">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="flex flex-col h-full w-screen">
          {/* HEADER */}

          <header className="flex border-b justify-between items-center px-6 py-4">
            <div className="max-md:hidden flex gap-4 items-center">
              <CompanyLogoLink />
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
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="size-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="flex flex-col gap-6 w-[275px]" side={"left"}>
                <SheetTitle>
                  <CompanyLogoLink />
                </SheetTitle>
                <AsideContent isActive={false} />
              </SheetContent>
            </Sheet>
            {/*<UpgradeHoverCard />*/}
            <div className="flex gap-4 items-center">
              <ModeToggle />
              <AvatarButton />
            </div>
          </header>
          <div className="flex flex-grow h-full overflow-hidden">
            <aside
              className={`max-md:hidden flex flex-col justify-between py-2 border-r transition-all ease-linear duration-500 ${
                isActive
                  ? "min-w-[0px] max-w-[100px]"
                  : "min-w-[150px] max-w-[500px]"
              }`}
            >
              <AsideContent isActive={isActive} />
            </aside>
            {/* MAIN */}
            <div className="overflow-scroll flex-grow">{children}</div>
          </div>
        </div>
      </ThemeProvider>
    </body>
  );
};

export default SideBar;

const AsideContent = ({ isActive }: { isActive: boolean }) => {
  return (
    <>
      {/*   NAVIGATION   */}
      <AsideNav isActive={isActive} />

      {!isActive && (
        <Card className="max-w-[250px] md:mx-4 mt-auto mb-8">
          <CardHeader>
            <CardTitle className="flex gap-2">Upgrade to Pro</CardTitle>
            <CardDescription>
              Unlock all features and get unlimited access to our support team.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <Progress value={33} aria-label="Test" />
            <p className="text-muted-foreground text-sm text-center">10 left</p>
            <Button size="sm" className="w-full flex gap-2">
              <Stars className="size-4" />
              Upgrade
            </Button>
          </CardContent>
        </Card>
      )}

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
        <Separator className="max-md:hidden" />
        <p className="flex justify-center text-sm truncate">
          {isActive ? "© 2024" : "© 2024 Acme Inc"}
        </p>
      </div>
    </>
  );
};

const AsideNav = ({ isActive }: { isActive: boolean }) => {
  const pathname = usePathname();
  return (
    <nav className="grid items-start font-medium gap-2 px-4">
      <p className="text-muted-foreground text-sm">Main</p>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="/"
              className={`${
                pathname === "/" ? isActiveLinkClass : ""
              } ${navLinkClass}`}
            >
              <HomeIcon className="size-6" />
              <p className={`${isActive ? "hidden" : ""}`}>Home</p>
            </Link>
          </TooltipTrigger>
          {isActive && <TooltipContent side="right">Home</TooltipContent>}
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="/analytics"
              className={`${
                pathname === "/analytics" ? isActiveLinkClass : ""
              } ${navLinkClass}`}
            >
              <LineChart className="size-6" />
              <p className={`${isActive ? "hidden" : ""}`}>Analytics</p>
            </Link>
          </TooltipTrigger>
          {isActive && <TooltipContent side="right">Analytics</TooltipContent>}
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="/transactions"
              className={`${
                pathname === "/transactions" ? isActiveLinkClass : ""
              } ${navLinkClass}`}
            >
              <ArrowLeftRight className="size-6" />
              <p className={`${isActive ? "hidden" : ""}`}>Transactions</p>
            </Link>
          </TooltipTrigger>
          {isActive && (
            <TooltipContent side="right">Transactions</TooltipContent>
          )}
        </Tooltip>

        <p className="text-muted-foreground text-sm mt-4">More</p>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="/tutorial"
              className={`${
                pathname === "/tutorial" ? isActiveLinkClass : ""
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
          </TooltipTrigger>
          {isActive && <TooltipContent side="right">Tutorial</TooltipContent>}
        </Tooltip>
      </TooltipProvider>
    </nav>
  );
};

const CompanyLogoLink = () => {
  return (
    <Link href="#" className="flex items-center gap-3 px-3">
      <Package2 className="size-6" />
      <h1 className="font-medium text-lg">Acme Inc</h1>
    </Link>
  );
};

function CardUpgrade() {
  return (
    <div className="mt-auto">
      <Card>
        <CardHeader>
          <CardTitle>Upgrade to Pro</CardTitle>
          <CardDescription>
            Unlock all features and get unlimited access to our support team.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button size="sm" className="w-full">
            Upgrade
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

const UpgradeHoverCard = () => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button
          variant={"ghost"}
          className="flex gap-4 items-center max-md:hidden"
        >
          <p className="text-muted-foreground text-sm text-nowrap">10 lefts</p>
          <Progress value={33} className="min-w-60" />
          <ChevronDown className="size-6" />
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-full">
        <UpgradeHoverCardContent />
      </HoverCardContent>
    </HoverCard>
  );
};

const UpgradeHoverCardContent = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <Crown className="size-6" />
          <div className="flex flex-col">
            <p className="text-sm font-medium">Subscribe to Pro</p>
            <div className="text-muted-foreground text-xs">
              Get unlimited features
            </div>
          </div>
        </div>
        <Button size="sm" className="flex gap-2">
          <Stars className="size-4" />
          Upgrade
        </Button>
      </div>
    </div>
  );
};

const AvatarButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon" className="rounded-full">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <span className="sr-only">Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              John Doe
              <Badge variant={"default"} className="text-xs bg-sky-500">
                Free
              </Badge>
            </div>
            <div className="text-muted-foreground text-sm font-normal">
              john.doe@gmail.com
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
