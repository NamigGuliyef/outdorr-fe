"use client";
import useNav from "@/hooks/useNav";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useState } from "react";

export default function UserMenu({
  scroll,
  classNameProp,
}: {
  scroll: boolean;
  classNameProp: string;
}) {
  const { isOpen, setIsOpen } = useNav();
  const [isSearching, setIsSearching] = useState(false);
  const pathname = usePathname();
  const isHomeRoute = pathname === "/";
  const className =
    (isHomeRoute && (scroll || !scroll)) || (!isHomeRoute && scroll)
      ? "invert-0"
      : "invert";

  const handleSearchToggle = () => {
    setIsSearching(!isSearching);
  };

  const variant = isOpen ? "opened" : "closed";
  const top = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: 45,
      translateY: 6,
      scale: 0.8,
    },
  };
  const center = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottom = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: -45,
      translateY: -6,
      scale: 0.8,
    },
  };

  return (
    <div className={`flex items-center gap-6 ${classNameProp}`}>
      <AnimatePresence>
        <motion.form className="items-center hidden lg:flex relative">
          <motion.input
            type="text"
            disabled={isSearching ? false : true}
            className={`h-8 outline-none ${className}  focus-visible:ring-0 focus-visible:border-white focus:outline-none pl-10`}
            initial={{ opacity: 0, width: 25 }}
            animate={{
              opacity: isSearching ? 0.75 : 0,
              borderRadius: 200,
              color: "#ffffffa8",
              backgroundColor: "#111",
              width: isSearching ? 178 : 25,
              originX: 100,
              transitionDuration: "1s",
            }}
          />
          <motion.img
            src={"/images/header/Search.svg"}
            onClick={isSearching === false ? handleSearchToggle : () => {}}
            height={17}
            width={17}
            className={`${className} z-1 duration-500 ${
              isSearching && "invert opacity-100"
            } cursor-pointer absolute transition-all`}
            initial={{
              opacity: 1,
              left: "70%",
              right: "0%",
              top: "50%",
              translateY: "-50%",
            }}
            animate={{
              opacity: isSearching ? 0.75 : 1,
              left: isSearching ? "5%" : "70%",
              right: isSearching ? "100%" : "0%",
            }}
            exit={{ opacity: 1, left: "70%", right: "0%" }}
            transition={{ duration: 0.2 }}
            alt="hamburger"
          />
          <motion.img
            src={"/images/header/X.svg"}
            onClick={handleSearchToggle}
            height={12}
            initial={{
              display: "none",
              opacity: 0.7,
            }}
            animate={{
              display: isSearching ? "block" : "none",
            }}
            transition={{ delay: isSearching ? 0.4 : 0 }}
            className="absolute top-1/2 cursor-pointer -translate-y-1/2 right-2"
            width={12}
          />
        </motion.form>
      </AnimatePresence>
      <div
        className={`cursor-pointer relative z-10`}
        onClick={() => setIsOpen(!isOpen)}>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          animate={variant}
          viewBox="0 0 28 28"
          className={`${className} ${
            isOpen && "invert-0"
          } duration-500 transition-all`}
          fill="none">
          <motion.path
            variants={top}
            d="M2 8H26"
            stroke="white"
            strokeWidth="2"
          />
          <motion.path
            variants={center}
            d="M2 14H26"
            stroke="white"
            strokeWidth="2"
          />
          <motion.path
            variants={bottom}
            d="M2 20H26"
            stroke="white"
            strokeWidth="2"
          />
        </motion.svg>
      </div>
    </div>
  );
}
