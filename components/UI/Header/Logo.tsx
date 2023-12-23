"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Logo({ scroll }: { scroll: boolean }) {
  const pathname = usePathname();
  const isHomeRoute = pathname === "/";

  const className =
    (isHomeRoute && (scroll || !scroll)) || (!isHomeRoute && scroll)
      ? "invert"
      : "invert-0";

  return (
    <Link
      href={"/"}
      className={` ${
        scroll ? "hover:invert" : ""
      } transition-all duration-500`}>
      <Image
        alt="Outdorra"
        src="/images/header/logoMobileBlack.svg"
        width={86}
        height={48}
        priority={true}
        className={`${className} block lg:hidden !h-[48px] transition-all duration-500`}
      />
      <Image
        alt="Outdorra"
        src="/images/header/LogoBlack.svg"
        width={200}
        height={24}
        priority={true}
        className={`${className} hidden lg:block transition-all duration-500`}
      />
    </Link>
  );
}
