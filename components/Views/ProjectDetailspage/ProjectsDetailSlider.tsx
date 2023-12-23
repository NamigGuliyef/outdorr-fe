"use client";
import Section from "@/components/UI/Section";
import { IExtendedProject, IProject } from "@/types/types";
import Image from "next/image";
import { useRef, useState } from "react";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ProjectsDetailSlider({
  data,
}: {
  data: IExtendedProject;
}) {
  const { photos } = data;
  const [_, setInit] = useState<boolean>();
  const [isLastSlide, setIsLastSlide] = useState(false);
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  return (
    <Section className="container mt-12 lg:mt-24 px-6 lg:px-0">
      <Swiper
        spaceBetween={24}
        speed={700}
        slidesPerView={1}
        effect="fade"
        onInit={() => setInit(true)}
        onSlideChange={({ isBeginning, isEnd }) => {
          setIsFirstSlide(isBeginning);
          setIsLastSlide(isEnd);
        }}
        className="relative h-[327px] md:h-[600px] !select-none"
        modules={[EffectFade, Navigation, Pagination]}
        navigation={{
          prevEl: prevButtonRef.current,
          nextEl: nextButtonRef.current,
        }}>
        {photos.map((item: any, idx: number) => (
          <SwiperSlide
            className="h-[327px] md:h-[600px] !select-none"
            key={idx}>
            <Image
              src={item}
              className="h-full max-h-full block w-full object-cover aspect-auto md:object-cover brightness-75 rounded-2.5xl"
              width={1320}
              height={600}
              alt="image"
            />
          </SwiperSlide>
        ))}
        <div className="!select-none hidden lg:flex absolute w-full justify-between px-14 top-1/2 z-50 -translate-y-1/2">
          <div
            className={`group z-50 ${
              !isFirstSlide && "hover:invert"
            }  rotate-180 transition-all ${
              isFirstSlide ? "cursor-default" : "cursor-pointer"
            }`}
            ref={prevButtonRef}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="76"
              height="76"
              viewBox="0 0 76 76"
              className="fill-transparent">
              <circle
                cx="38"
                cy="38"
                r="37.25"
                className="transition-all duration-500 "
                stroke={`${isFirstSlide ? "#000" : "#fff"}`}
                strokeWidth="1.5"
              />
              <path
                className="transition-all duration-500 "
                d="M33.1138 21L49.5 38.5M33 55L49.5 37.5"
                stroke={`${isFirstSlide ? "#000" : "#fff"}`}
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <div
            className={`group z-50 ${
              !isLastSlide && "hover:invert"
            } transition-all cursor-pointer`}
            ref={nextButtonRef}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="76"
              height="76"
              viewBox="0 0 76 76"
              className="fill-transparent">
              <circle
                cx="38"
                cy="38"
                r="37.25"
                className="transition-all duration-500 "
                stroke={`${isLastSlide ? "#000" : "#fff"}`}
                strokeWidth="1.5"
              />
              <path
                d="M33.1138 21L49.5 38.5M33 55L49.5 37.5"
                className="transition-all duration-500 "
                stroke={`${isLastSlide ? "#000" : "#fff"}`}
                strokeWidth="1.5"
              />
            </svg>
          </div>
        </div>
      </Swiper>
    </Section>
  );
}
