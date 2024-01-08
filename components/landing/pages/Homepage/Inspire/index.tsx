import LinkArrow from "@/components/landing/Common/LinkArrow";
import Image from "next/image";
import Link from "next/link";

export default function Inspire() {
  return (
    <div className="container px-6 lg:px-0 pb-24 font-sf">
      <h1 className="text-3.2xl md:text-5xl font-semibold text-darkgray mb-12 md:mb-9">
        Let Us Inspire You!
      </h1>
      <div className="hidden lg:grid grid-cols-3 max-h-[715px] gap-6">
        <div className="rounded-2xl lg:rounded-2.5xl overflow-hidden">
          <Image
            alt="image"
            src={"/images/main-page/inspire-1.png"}
            className="w-full h-full md:object-cover xl:h-auto rounded-2xl lg:rounded-2.5xl"
            width={424}
            height={715}
          />
        </div>
        <div className="grid md:gap-6 lg:gap-9">
          <div className="rounded-2xl lg:rounded-2.5xl overflow-hidden">
            <Image
              alt="Image"
              src={"/images/main-page/inspire-2.png"}
              width={424}
              className="w-full h-full object-cover"
              height={283}
            />
          </div>
          <div className="bg-secondarygray flex flex-col justify-start items-start gap-3 p-4 lg:p-6 rounded-2xl lg:rounded-2.5xl">
            <div>
              <h2 className="text-xl lg:text-2xl text-darkgray font-light">
                Do you have a new project ? <br /> Talk to our sales experts now
              </h2>
              <p className="text-black opacity-60 mb-3 leading-[150%] font-light w-7/12">
                Please join to the hot line or call to +1 (669) 301 0915
              </p>
            </div>
            <Link href={'/contacts'} className="block ml-auto">
              <div className="rounded-full cursor-pointer flex p-6 lg:p-11 xl:p-[72px] flex-col bg-mainblack">
                <Image
                  src="/images/main-page/msg.svg"
                  alt="MSG"
                  width={59}
                  className="md:w-8 xl:w-[59px] md:h-8 xl:h-[59px]"
                  height={59}
                />
              </div>
            </Link>
          </div>
        </div>
        <div className="grid grid-rows-[2fr, 1fr] lg:grid-rows-[3fr, 1fr]">
          <Image
            alt="Image"
            src={"/images/main-page/inspire-3.png"}
            className="w-full h-full lg:object-cover xl:h-auto rounded-2xl lg:rounded-2.5xl"
            width={424}
            height={587}
          />
          <LinkArrow className="mr-auto mt-auto md:mt-0" to="/projects" before>
            See All Our Projects
          </LinkArrow>
        </div>
      </div>
      <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] sm:grid-rows-[1fr_1fr] gap-6 lg:hidden">
        <div className="rounded-2xl max-h-[327px] sm:max-h-[400px] overflow-hidden">
          <Image
            alt="image"
            src={"/images/main-page/inspire-3.png"}
            className="object-cover rounded-2xl w-full max-h-[327px] min-[440px]:max-h-fit max-[440px]:min-w-[327px] h-full object-[45%_75%]"
            width={424}
            height={715}
          />
        </div>
        <div className="rounded-2xl max-h-[327px] sm:max-h-[400px] overflow-hidden">
          <Image
            alt="image"
            src={"/images/main-page/inspire-1.png"}
            className="object-cover rounded-2xl w-full max-h-[327px] min-[440px]:max-h-fit max-[440px]:min-w-[327px] h-full object-[45%_75%]"
            width={424}
            height={715}
          />
        </div>
        <div className="bg-secondarygray flex max-h-[327px] sm:max-h-[400px] flex-col justify-start items-start gap-3 p-5 rounded-2xl lg:rounded-2.5xl">
          <div>
            <h2 className="text-xl lg:text-2xl text-darkgray">
              Do you have a new project ? <br /> Talk to our sales experts now
            </h2>
            <p className="text-black opacity-60 mb-3 leading-[150%] font-light w-8/12">
              Please join to the hot line or call to +1 (669) 301 0915
            </p>
          </div>
          <div className="rounded-full ml-auto flex p-[45px] flex-col bg-mainblack">
            <Image
              src="/images/main-page/msg.svg"
              alt="MSG"
              width={59}
              className="w-[44px] h-[44px]"
              height={59}
            />
          </div>
        </div>
        <div className="rounded-2xl h-full max-h-[327px] sm:max-h-[400px] overflow-hidden">
          <Image
            alt="image"
            src={"/images/main-page/inspire-2.png"}
            className="object-cover rounded-2xl w-full min-h-[327px] min-[440px]:max-h-fit max-[440px]:min-w-[327px] h-full object-[45%_75%]"
            width={424}
            height={587}
          />
        </div>
        <LinkArrow
          className="text-lg py-3 border-2 border-lightblue cursor-pointer hover:bg-lightblue hover:text-white transition-all duration-500 rounded-full flex justify-center w-full mt-auto md:mt-0"
          to="/projects"
          before
        >
          See All Our Projects
        </LinkArrow>
      </div>
    </div>
  );
}
