import Image from "next/image";

export interface IDesign {
  step: string;
  title: string;
  description: string;
  photo: string;
}

const TailoredCard: React.FC<{ data: IDesign }> = ({ data }) => {
  return (
    <div
      className="flex flex-col-reverse md:flex-row md:even:flex-row-reverse border rounded-2xl lg:rounded-[30px] overflow-hidden border-[#bababa]"
      id="card"
    >
      <div
        className="p-6 md:p-10 lg:p-[56px] md:w-1/2 flex flex-col justify-between"
        id="card-text"
      >
        <div className="flex !text-darkgray flex-col gap-4 lg:gap-8">
          <h3 className="text-2xl md:text-3xl xl:text-3.2xl font-semibold">{data.step}</h3>
          <h1 className="text-3.2xl leading-[120%] md:text-4xl capitalize xl:text-5xl font-semibold">{data.title}</h1>
        </div>
        <p className="font-sf mt-8 lg:mt-0 lg: text-xl xl:text-2xl text-darkgray leading-[125%]">
          {data.description}
        </p>
      </div>
      <div className="md:w-1/2" id="card-img">
        <Image
          alt="Image"
          quality={100}
          width="660"
          className="w-full h-full"
          height={648}
          src={data.photo}
        />
      </div>
    </div>
  );
};

export default TailoredCard;
