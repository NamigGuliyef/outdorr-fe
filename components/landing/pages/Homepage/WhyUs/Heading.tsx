export default function Heading({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-8 md:gap-10 font-sf">
      <h1 className="font-semibold text-darkgray text-3.2xl md:text-5xl">
        {title}
      </h1>
      <p
        className="leading-[145%] text-xl md:text-2xl text-darkgray max-w-[495px]"
        dangerouslySetInnerHTML={{ __html: description }}
      ></p>
    </div>
  );
}
