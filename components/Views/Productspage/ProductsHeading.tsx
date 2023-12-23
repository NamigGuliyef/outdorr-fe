import ScrollDown from "@/components/Common/ScrollDown";

export function ProductsHeading({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="container px-6 lg:px-0 grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-12 md:gap-0 pt-8 lg:pt-24 pb-12 lg:pb-24 !text-darkgray">
      <div className="md:col-span-3 lg:col-span-5 xl:col-span-4 flex flex-col justify-between">
        <h1 className="text-3.2xl md:text-6xl lg:text-7.2xl lg:mb-36 font-semibold lg:font-normal">
          {title} <span className="text-base md:text-4xl">series</span>
        </h1>
        <ScrollDown />
      </div>
      <div className="md:col-span-3 lg:col-span-6 lg:col-start-7 xl:col-start-7 flex flex-col">
        <p className="text-xl lg:text-2xl lg:max-w-[531px] leading-[125%]">
          {description}
        </p>
      </div>
    </div>
  );
}
