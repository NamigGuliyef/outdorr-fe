import Request from "@/components/Common/Request";
import RequestInfo from "@/components/Common/RequestInfo";
import Section from "@/components/UI/Section";
import ProductSpecs from "@/components/Views/ProductDetailspage/ProductSpecs";
import Hero from "@/components/Views/Productspage/Hero";
import { ProductsHeading } from "@/components/Views/Productspage/ProductsHeading";
import { SubProductsList } from "@/components/Views/Productspage/SubProductsList";
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
