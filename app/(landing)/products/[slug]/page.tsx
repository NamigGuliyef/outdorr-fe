import Request from "@/components/landing/Common/Request";
import RequestInfo from "@/components/landing/Common/RequestInfo";
import Section from "@/components/landing/UI/Section";
import Hero from "@/components/landing/pages/Productspage/Hero";
import { ProductsHeading } from "@/components/landing/pages/Productspage/ProductsHeading";
import { SubProductsList } from "@/components/landing/pages/Productspage/SubProductsList";
import { IProduct, ISubProduct } from "@/types/types";
import { notFound } from "next/navigation";

async function getData(slug: string): Promise<IProduct> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/products/${slug}`,
    {
      next: { revalidate: 60 },
    }
  );
  return res.json();
}

export async function generateStaticParams() {
  const products = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/products/`
  ).then((res) => res.json());
  return products.map((product: IProduct) => ({
    slug: product.slug,
  }));
}

export default async function Products({
  params,
}: {
  params: { slug: string };
}) {
  const product: IProduct = await getData(params.slug);
  const subproducts: ISubProduct[] = product.subProductIds;
  if (product.statusCode === 404) return notFound();

  const { title, photo, description, subProductIds } = product;
  return (
    <Section className="mt-24 lg:mt-[88px]">
      <Hero photo={photo} />
      <Section className=" font-sf bg-white relative z-10 rounded-t-2xl rounded-b-2xl lg:rounded-b-section lg:rounded-t-section -mt-8 md:-mt-16">
        <ProductsHeading title={title} description={description} />
        <RequestInfo styles="px-6 lg:px-0 " />
        <SubProductsList products={subproducts} />
        <div className="container px-6 lg:px-0 pb-[60px] flex justify-center">
          <Request size="lg" />
        </div>
      </Section>
    </Section>
  );
}
