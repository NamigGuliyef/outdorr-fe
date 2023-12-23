import Image from "next/image";

export default function Hero() {
  return (
    <div className="pt-24 w-full h-[720px] lg:h-screen bg-cover bg-[50%_60%] bg-hero">
      <div className="px-6 lg:px-0 container flex justify-between flex-col h-full font-sf">
        <div className="capitalize mt-6 relative lg:mt-32 text-[40px] lg:text-7xl flex gap-5">
          <div className="text-white ltrim leading-[115%] max-w-[327px]  xs:max-w-sm lg:max-w-[675px]">
            <span className="font-bold">live sustainable</span> feel the nature
            with
            <Image
              src="/images/main-page/oMobile.svg"
              className="inline-block lg:hidden mb-2 ml-2"
              width={72}
              height={28}
              loading="lazy"
              alt="image"
            />
          </div>
          <Image
            src="/images/main-page/o.svg"
            priority={true}
            className="mt-auto hidden lg:block mb-4"
            width={144}
            height={52}
            alt="image"
          />
        </div>
        <div className="flex mb-16 md:mb-32 flex-row justify-between">
          <div className="flex gap-5 items-center">
            <div className="group hover:invert transition-all cursor-pointer">
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
                  stroke="#DEDEDE"
                  strokeWidth="1.5"
                />
                <path
                  d="M33.1138 21L49.5 38.5M33 55L49.5 37.5"
                  stroke="#DEDEDE"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <div className="flex flex-col text-xl text-white font-sf">
              <p className="font-light">Sunroom</p>
              <p className="font-bold">GALAX</p>
            </div>
          </div>
          <div className="hidden items-center">
            <Image
              src={"/images/main-page/arrowHero.svg"}
              alt="arrow"
              width={66}
              height={19}
              className="rotate-180 opacity-50 cursor-pointer"
            />
            <Image
              src={"/images/main-page/arrowHero.svg"}
              alt="arrow"
              width={66}
              height={19}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
