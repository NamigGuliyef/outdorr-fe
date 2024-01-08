"use client";
import useNav from "@/hooks/useNav";
import { usePathname } from "next/navigation";
import LinkItem from "./LinkItem";

interface NavigationProps {
  scroll?: boolean;
}
export default function Navigation({ scroll }: NavigationProps) {
  const pathname = usePathname();
  const isHomeRoute = pathname === "/";

  const { isOpen } = useNav();

  const className =
    (isHomeRoute && (scroll || !scroll)) || (!isHomeRoute && scroll)
      ? "!text-white"
      : "!text-white lg:!text-black";
  return (
    <div className={`font-helvetica ml-auto`}>
      <div
        className={`flex flex-col-reverse justify-end lg:justify-normal bg-[#1d1d1d] transition-all duration-300 lg:duration-500 linear pt-[10%] sm:pt-[5%] pl-[5%] pr-[5%] lg:p-0 max-[992px]:h-full lg:bg-transparent w-2/3 sm:w-1/3 lg:w-full fixed lg:static top-0 -right-full ${
          isOpen && "!right-0"
        } ${className}`}>
        <ul className="flex flex-col pt-5 lg:pt-0 border-t border-white lg:mr-2 lg:border-none border-opacity-20 lg:flex-row text-sm gap-9 font-medium">
          <LinkItem to="/products/pergola">Sunroom</LinkItem>
          <LinkItem to="/products/louver">Louver</LinkItem>
          <LinkItem to="/products/pergola">Pergola</LinkItem>
          <LinkItem to="/products/blinds">Blinds</LinkItem>
          <LinkItem to="/products/windows-and-doors">Windows & Doors</LinkItem>
        </ul>
        <div
          className={`z-[5] transition-all duration-300 lg:duration-500 pb-5 lg:pb-0 linear lg:bg-[#1d1d1d] lg:w-[32%] xl:w-[25%] lg:h-full lg:pt-[5%] lg:pl-[2%] lg:pr-[5%] lg:fixed -right-full ${
            isOpen && "!right-0"
          } top-0`}>
          <ul className="text-sm flex flex-col !text-white gap-9 font-medium lg:font-light">
            <LinkItem className="lg:!text-3xl" to="/">
              Home
            </LinkItem>
            <LinkItem className="lg:!text-3xl" to="/projects">
              Projects
            </LinkItem>
            <LinkItem className="lg:!text-3xl" to="/design">
              About Us
            </LinkItem>
            <LinkItem className="lg:!text-3xl" to="/request">
              Request a project
            </LinkItem>
            <LinkItem className="lg:!text-3xl" to="/contacts">
              Contact Us
            </LinkItem>
          </ul>
        </div>
      </div>
    </div>
  );
}
