import Request from "@/components/Common/Request";
import RequestInfo from "@/components/Common/RequestInfo";
import ScrollDown from "@/components/Common/ScrollDown";
import Section from "@/components/UI/Section";
import ProductApplications from "@/components/Views/ProductDetailspage/ProductApplications";
import ProductDetailSlider from "@/components/Views/ProductDetailspage/ProductDetailSlider";
import ProductSpecs from "@/components/Views/ProductDetailspage/ProductSpecs";
import ProductsSlider from "@/components/Views/ProductDetailspage/Products";
import { cn } from "@/lib/utils";
import { IProduct, ISubProduct, ISubProductFeature } from "@/types/types";
import Image from "next/image";

interface ProductDetailsPage {
  product: IProduct;
  products: IProduct[];
}
async function getSubProductData(slug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/subproducts/${slug}`,
    {
      next: { revalidate: 60 },
    }
  );
  return res.json();
}
async function getData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/subproducts`,
    {
      next: { revalidate: 60 },
    }
  );
  return res.json();
}

const specs = [
  {
    title: "Weight",
    spec: "16.8 oz/yd2",
  },
  {
    title: "Width",
    spec: "70.9 in",
  },
  {
    title: "Standard Format Length",
    spec: "43.7 yds",
  },
  {
    title: "Tensile Strength",
    spec: "200/200 daN/ 5 cm",
  },
  {
    title: "Tear Strength",
    spec: "20/20 daN",
  },
];
export default async function ProductDetails({
  params,
}: {
  params: { slug: string };
}) {
  const subproduct: ISubProduct = await getSubProductData(params.slug);
  const { title, description, description_2, featuresIds } = subproduct;
  const subproducts: ISubProduct[] = await getData();
  return (
    <Section className="mt-24 lg:mt-[88px]">
      <ProductDetailSlider product={subproduct} />
      <Section className="container font-sf px-6 lg:px-0 grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-12 md:gap-0 pt-8 lg:pt-24 pb-12 lg:pb-24 !text-darkgray">
        <div className="md:col-span-3 lg:col-span-5 flex flex-col justify-between">
          <h1 className="text-3.2xl md:text-6xl lg:text-7.2xl lg:mb-36 font-semibold lg:font-normal">
            {title}
          </h1>
          <ScrollDown />
        </div>
        <div className="md:ml-3 md:col-span-3 lg:col-span-6 lg:col-start-7 xl:col-start-7 flex flex-col">
          <p className="text-xl lg:text-2xl lg:max-w-[531px] leading-[125%]">
            {description}
          </p>
        </div>
        <div className="md:col-span-12 md:mt-20">
          <p className="text-xl md:text-3.2xl text-darkdray leading-[125%] ">
            {description_2}
          </p>
        </div>
      </Section>
      <Section className="section">
        <RequestInfo styles="px-6 lg:px-0" />
      </Section>
      <Section className="container px-6 lg:px-0 gap-6 my-20 grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12">
        <div className="md:col-span-4 lg:col-span-4 font-sf text-darkgray">
          <h1 className="text-2xl sm:text-3.2xl md:text-5xl font-semibold mb-8">
            Features
          </h1>
          <p className="text-2xl hidden md:block">
            Vel viverra in mi quis. Egestas neque
          </p>
        </div>
        {/* <div className="md:col-span-6 lg:col-span-8 font-sf gap-6 grid md:grid-cols-2 md:grid-rows-2"> */}
        <div
          className={cn(
            "md:col-span-6 lg:col-span-8 font-sf gap-6 grid md:grid-cols-2 md:grid-rows-2",
            featuresIds.length === 1
              ? "md:grid-cols-1 md:grid-rows-1"
              : featuresIds.length === 2
              ? "md:grid-cols-2 md:grid-rows-1"
              : featuresIds.length === 3
              ? "md:grid-cols-2 md:grid-rows-1 col-span-2"
              : "md:grid-cols-2 md:grid-rows-2"
          )}
        >
          {featuresIds.map((feature: ISubProductFeature, idx) => (
            <div
              key={idx}
              className="flex p-8 gap-6 border border-[#BABABA] rounded-[30px]"
            >
              <div className="w-3/4 flex text-blackgray  flex-col gap-6">
                <h2 className="text-2xl font-semibold">{feature.title}</h2>
                <p>{feature.description}</p>
              </div>
              <div className="w-1/4">
                <Image
                  src={feature.icon}
                  className="ml-auto"
                  alt=""
                  width={70}
                  height={70}
                />
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Section className="!font-sf">
        <ProductSpecs product={subproduct} />
      </Section>
      <Section className="!font-sf">
        <ProductApplications />
      </Section>
      <Section className=" mt-60px px-6 py-12 lg:p-60px border rounded-2xl lg:rounded-section border-[#D2D4D4]">
        <ProductsSlider products={subproducts} />
      </Section>

      <Section className="container px-6 lg:px-0 flex justify-center mt-60px mb-60px pb-16">
        <Request size="lg" />
      </Section>
    </Section>
  );
}
