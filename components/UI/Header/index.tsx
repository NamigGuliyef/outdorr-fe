"use client";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import UserMenu from "./UserMenu";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [scroll, setScroll] = useState(false);
  const isHomeRoute = pathname === "/";
  const className =
    isHomeRoute && scroll
      ? "bg-[#1d1d1d] !rounded-none"
      : isHomeRoute && !scroll
      ? "bg-transparent"
      : !isHomeRoute && scroll
      ? "bg-[#1d1d1d] !rounded-none"
      : "bg-transparent";
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY >= 30) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    }
    if (window.scrollY > 0) {
      handleScroll();
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`fixed z-50 px-6 lg:px-0 ${className} w-full transition-all ease-in-out duration-[500ms] top-0`}>
      <nav
        className={`container relative mx-auto py-6 lg:py-7 items-center flex justify-between`}>
        <Logo scroll={scroll} />
        <Navigation scroll={scroll} />
        <UserMenu classNameProp="flex" scroll={scroll} />
      </nav>
    </header>
  );
}
