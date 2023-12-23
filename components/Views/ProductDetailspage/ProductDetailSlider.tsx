'use client'
import Section from "@/components/UI/Section";
import React from "react";
import { useRef, useState } from "react";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import { IProduct, ISubProduct } from "@/types/types";
import Image from "next/image";

function ProductDetailSlider({ product }: { product: ISubProduct }) {
  const { photos } = product;
  const [_, setInit] = useState<boolean>();
  const [isLastSlide, setIsLastSlide] = useState(false);
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  return (
    <Section className="mt-12 lg:mt-24">
      <Swiper
        spaceBetween={24}
        speed={700}
        slidesPerView={3}
        effect="fade"
        onInit={() => setInit(true)}
        onSlideChange={({ isBeginning, isEnd }) => {
          setIsFirstSlide(isBeginning);
          setIsLastSlide(isEnd);
        }}
        className="relative h-[327px] md:h-[500px] !select-none"
        modules={[EffectFade, Navigation, Pagination]}
        navigation={{
          prevEl: prevButtonRef.current,
          nextEl: nextButtonRef.current,
        }}
      >
        {photos.map((item: any, idx: number) => (
          <SwiperSlide
            className="h-[327px] md:h-[500px] !select-none"
            key={idx}
          >
            <Image
              src={item}
              className="h-full max-h-full block w-full object-cover aspect-auto md:object-cover brightness-75 rounded-2.5xl"
              width={1320}
              height={500}
              alt="image"
            />
          </SwiperSlide>
        ))}
        <div className="!select-none hidden lg:flex absolute w-full justify-between px-14 top-1/2 z-50 -translate-y-1/2">
          <div
            className={`group z-50 ${
              !isFirstSlide && "hover:invert"
            }  rotate-180 transition-all ${
              isFirstSlide ? "cursor-default opacity-0" : "cursor-pointer"
            }`}
            ref={prevButtonRef}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="76"
              height="76"
              viewBox="0 0 76 76"
              fill="none"
            >
              <circle
                cx="38"
                cy="38"
                r="37.25"
                fill="black"
                fill-opacity="0.2"
                stroke="white"
                strokeWidth="1.5"
              />
              <path
                d="M33.1138 21L49.5 38.5M33 55L49.5 37.5"
                stroke="white"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <div
            className={`group z-50 ${
              !isLastSlide && "hover:invert"
            } transition-all ${
              isLastSlide ? "cursor-default opacity-0" : "cursor-pointer"
            }`}
            ref={nextButtonRef}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="76"
              height="76"
              viewBox="0 0 76 76"
              fill="none"
            >
              <circle
                cx="38"
                cy="38"
                r="37.25"
                fill="black"
                fill-opacity="0.2"
                stroke="white"
                strokeWidth="1.5"
              />
              <path
                d="M33.1138 21L49.5 38.5M33 55L49.5 37.5"
                stroke="white"
                strokeWidth="1.5"
              />
            </svg>
          </div>
        </div>
      </Swiper>
    </Section>
  );
}

export default ProductDetailSlider;
