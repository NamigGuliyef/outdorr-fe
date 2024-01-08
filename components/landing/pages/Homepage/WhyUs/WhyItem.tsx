export default function WhyItem({
  text,
  heading,
}: {
  text: string;
  heading: string;
}) {
  return (
    <div className="flex md:max-w-[310px] font-sf flex-col gap-4 justify-between h-full">
      <h1 className="text-lightblue uppercase font-sf font-semibold text-2xl">{heading.toUpperCase()}</h1>
      <p className="font-sf text-base leading-[150%]">{text}</p>
    </div>
  );
}
