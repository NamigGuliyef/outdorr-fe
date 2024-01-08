import { PageWrapper } from "@/components/PageWrapper";
import About from "@/components/landing/pages/Homepage/About";
import Hero from "@/components/landing/pages/Homepage/Hero";
import Inspire from "@/components/landing/pages/Homepage/Inspire";
import Support from "@/components/landing/pages/Homepage/Support";
import WhyUs from "@/components/landing/pages/Homepage/WhyUs";
const getWhyUs = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/why-outdorr`,
    {
      next: { revalidate: 60 },
    }
  );
  return res.json();
};
export default async function Home() {
  const whyusData = await getWhyUs();
  const whyUs = whyusData[0];
  return (
    <PageWrapper>
      <Hero />
      <About />
      <WhyUs data={whyUs} />
      <Inspire />
      <Support />
    </PageWrapper>
  );
}
