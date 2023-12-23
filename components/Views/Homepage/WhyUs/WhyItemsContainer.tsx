"use client";
import WhyItem from "./WhyItem";
import { useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { IWhyUs } from "@/types/types";

const DATA = [
  {
    id: 1,
    heading: "Increase the value of your property",
    text: "Our products are designed to improve the quality of life for homeowners and increase the value of your property.",
  },
  {
    id: 2,
    heading: "Competitive pricing",
    text: "Our competitive pricing makes it possible for homeowners to invest in high quality glazing solutions without breaking the bank.",
  },
  {
    id: 3,
    heading: "Innovation and performance",
    text: "Our product development teams ensure that our products are always at the forefront of industry innovation and performance.",
  },
  {
    id: 4,
    heading: "Best value for your money",
    text: "You can trust that you are getting the best value for your money when it comes to customized glazing for your home.",
  },
  {
    id: 5,
    heading: "Top quality material",
    text: "Our products are manufactured in many countries using top quality materials, ensuring that they are both durable and aesthetically pleasing.",
  },
  {
    id: 6,
    heading: "Customized solutions",
    text: "We offer customized solutions to meet the unique needs and preferences of our customers.",
  },
];
export default function WhyItemsContainer({ data }: { data: IWhyUs }) {
  const [progress, setProgress] = useState(0);

  const handleSlideChange = (swiper: any) => {
    setProgress((swiper.realIndex + 1) / DATA.length);
  };

  return (
    <div className="">
      <div className="block md:hidden">
        <Swiper
          spaceBetween={24}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 12,
            },
            540: {
              slidesPerView: 2,
              spaceBetween: 12,
            },
          }}
          loop={true}
          speed={700}
          onInit={handleSlideChange}
          onSlideChange={handleSlideChange}
          className="mt-12 swiperWhy"
          modules={[Autoplay]}
          autoplay={{ delay: 2500 }}
        >
          {data.about_outdorr.map((item) => (
            <SwiperSlide key={item._id}>
              <WhyItem key={item._id} text={item.value} heading={item.key} />
            </SwiperSlide>
          ))}
          {/* {DATA.map((item) => (
            <SwiperSlide key={item.id}>
              <WhyItem key={item.id} text={item.text} heading={item.heading} />
            </SwiperSlide>
          ))} */}
        </Swiper>
        <div className="w-full mt-12 h-2 bg-secondarygray rounded-lg">
          <div
            className="h-full transition-all duration-300 ease-in bg-lightblue"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </div>
      <div className="hidden md:mt-16 md:flex md:gap-6 md:flex-wrap">
        {data.about_outdorr.map((data) => (
          <WhyItem key={data._id} text={data.value} heading={data.key} />
        ))}
      </div>
    </div>
  );
}
