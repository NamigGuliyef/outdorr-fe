import Image from "next/image";
import Heading from "./Heading";
import WhyItemsContainer from "./WhyItemsContainer";
import { IWhyUs } from "@/types/types";

const WhyUs = ({ data }: { data: IWhyUs }) => {
  const { _id, title, about_outdorr, createdAt, description, updatedAt } = data;
  return (
    <div className="container px-6 lg:px-0 pt-24 pb-32">
      <div className="md:flex justify-between lg:justify-normal lg:gap-14 xl:gap-28">
        <div className="hidden md:block md:w-1/2 lg:w-3/12 xl:w-3/12">
          <Image
            alt="image"
            src={"/images/main-page/why.svg"}
            height={758}
            width={282}
          />
        </div>
        <div className="md:w-1/2 lg:w-8/12 xl:w-6/12">
          <Heading title={title} description={description} />
          <WhyItemsContainer data={data} />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
