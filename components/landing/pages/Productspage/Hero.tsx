"use client";
import Image from "next/image";

export default function Hero({ photo }: { photo: string }) {
  return (
    <div className="rounded-t-2xl w-full lg:rounded-t-section max-h-[320px] lg:max-h-[510px] overflow-hidden">
      <div className="relative h-[320px] lg:h-[510px]">
        <Image
          src={photo}
          alt="Hero Image"
          fill
          priority
          quality={75}
          className="w-full h-full object-[25%] md:object-left object-cover opacity-0 transition-all duration-200"
          onLoad={(image) => (image.currentTarget.style.opacity = "1")}
        />
      </div>
    </div>
  );
}
