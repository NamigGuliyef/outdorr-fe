import LinkArrow from "@/components/landing/Common/LinkArrow";
import Request from "@/components/landing/Common/Request";
import Image from "next/image";

export default function Support() {
  return (
    <div className="pt-12 md:pt-16 rounded-b-2xl lg:rounded-b-section bg-secondarygray relative font-sf pb-12 md:pb-20">
      <div className="flex flex-col gap-6 md:flex-row container px-6 lg:px-0 mb-16">
        <div className="md:w-1/2 lg:w-7/12 rounded-2.5xl overflow-hidden">
          <Image
            src={"/images/main-page/support.png"}
            width={760}
            height={550}
            className="rounded-2.5xl w-full h-full object-cover hidden lg:block"
            alt="Image"
          />
          <Image
            src={"/images/main-page/supportMobile.png"}
            width={327}
            height={327}
            className="rounded-2.5xl w-full min-h-[327px] h-[327px] md:h-auto object-cover block lg:hidden"
            alt="Image"
          />
        </div>
        <div className="md:w-1/2 lg:w-5/12 bg-mainblack min-h-[327px] h-[327px] md:h-auto rounded-2.5xl overflow-hidden flex flex-col p-5 pr-20 lg:pl-8 lg:pr-16 lg:py-12 xl:pl-10 xl:pr-20 xl:py-14">
          <h1 className="font-semibold text-3.2xl lg:text-5xl leading-[115%] text-white">
            <span className="text-lightblue">Tailored</span>
            <br />
            Project Design
          </h1>
          <p className="lg:text-2xl text-white opacity-80 mt-4 mb-auto lg:mb-0 lg:mt-8 xl:mt-12 leading-[125%] font-light">
            We design your outdoor and backyard space to maximize the usage,
            ultimately all year around. Let’s make your dreams come true now.
          </p>
          <LinkArrow className="text-lg mt-auto" to="/design" before={false}>
            Explore
          </LinkArrow>
        </div>
      </div>
      <div className="flex overflow-x-hidden relative">
        <Image
          src={"/images/main-page/leaf.png"}
          className="absolute -right-[48%] min-[460px]:-right-[30%] min-[610px]:-right-[0%] top-[5%] md:right-0 md:top-0"
          alt="leaf"
          width={339}
          height={517}
        />
        <div className="container px-6 lg:px-0">
          <h1 className="font-semibold text-3.2xl md:text-5xl leading-[115%] text-darkgray">
            We Support
            <br />
            <span className="text-[#3A9E0B]">The Sustainability</span>
            <div className="mt-12 md:mt-24 mb-12 md:mb-20 pb-20 border-b border-black flex flex-col gap-8 md:flex-row md:gap-6">
              <div className="md:w-1/4 flex flex-col gap-6">
                <Image
                  src={"/images/main-page/icon-1.png"}
                  width={43}
                  height={50}
                  alt="icon"
                />
                <p className="text-base leading-[150%] text-black opacity-60 font-light">
                  Lightweight, but sturdy and durable. Small foot-printed
                  structures.
                </p>
              </div>
              <div className="md:w-1/4 flex flex-col gap-6">
                <Image
                  src={"/images/main-page/icon-2.png"}
                  width={43}
                  height={50}
                  alt="icon"
                />
                <p className="text-base leading-[150%] text-black opacity-60 font-light">
                  More than 75% of the aluminium that has ever been extracted is
                  still in use today.
                </p>
              </div>
              <div className="md:w-1/4 flex flex-col gap-6">
                <Image
                  src={"/images/main-page/icon-3.png"}
                  width={43}
                  height={50}
                  alt="icon"
                />
                <p className="text-base leading-[150%] text-black opacity-60 font-light">
                  Long life and complete recyclability without reduction in
                  quality.
                </p>
              </div>
              <div className="md:w-1/4 flex flex-col gap-6">
                <Image
                  src={"/images/main-page/icon-4.png"}
                  width={43}
                  height={50}
                  alt="icon"
                />
                <p className="text-base leading-[150%] text-black opacity-60 font-light">
                  Excellent thermal insulation thanks to thermal separation and
                  airtightness.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <Request size={"sm"} />
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
}
