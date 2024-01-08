"use client";
import { useRef, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { PiArrowCircleLeftThin, PiArrowCircleRightThin } from "react-icons/pi";
import Image from "next/image";
import { CollectionNav } from "./CollectionNav";
import Link from "next/link";

export interface CollectionProps {
  data: {
    id: number;
    image: string;
    text: string;
  }[];
}

const Collection: React.FC<CollectionProps> = ({ data }) => {
  const [_, setInit] = useState<boolean>();
  const [isLastSlide, setIsLastSlide] = useState(false);
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const swiper = useSwiper();
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  return (
    <div className="container px-6 lg:px-0 font-sf font-semibold">
      <div className="flex flex-col gap-10 mt-20">
        <div className="flex text-darkgray justify-between items-center">
          <h1 className="text-3.2xl md:text-5xl">Meet our collection</h1>
          <div className="hidden md:flex gap-1 text-5xl">
            <div
              className={isFirstSlide ? "cursor-default" : "cursor-pointer"}
              ref={prevButtonRef}
            >
              <CollectionNav rotate={true} isFirst={isFirstSlide} />
            </div>
            <div
              className={isLastSlide ? "cursor-default" : "cursor-pointer"}
              ref={nextButtonRef}
            >
              <CollectionNav isLast={isLastSlide} />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 pb-8 md:pb-16">
        <Swiper
          spaceBetween={24}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 24,
            },
            530: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          speed={700}
          onInit={() => setInit(true)}
          onSlideChange={({ isBeginning, isEnd }) => {
            setIsFirstSlide(isBeginning);
            setIsLastSlide(isEnd);
          }}
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: prevButtonRef.current,
            nextEl: nextButtonRef.current,
          }}
        >
          {data.map((item: any) => (
            <SwiperSlide key={item.id}>
              <Link href={"/products/" + item.text}>
                <div className="flex flex-col gap-8">
                  <div className="w-full">
                    <Image
                      src={"/images/main-page/" + item.image}
                      className="w-full h-full hover:scale-95 transition-all ease-in duration-200 select-none object-cover rounded-2.5xl"
                      width={500}
                      height={400}
                      alt="image"
                    />
                  </div>
                  <h1 className="text-2xl uppercase text-darkgray">
                    {item.text}
                  </h1>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Collection;
