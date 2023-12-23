import Preloader from "@/components/Common/Preloader";
import Section from "@/components/UI/Section";
import Hero from "@/components/Views/Requestpage/Hero";
import dynamic from "next/dynamic";
const DynamicRequestView = dynamic(
  () => import("@/components/Views/Requestpage/RequestView"),
  {
    loading: () => (
      <div className="min-h-screen">
        <Preloader />
      </div>
    ),
  }
);
export default function Request() {
  return (
    <Section className="mt-24 lg:mt-[88px]">
      <Hero />
      <Section className="relative font-sf z-10 pt-0 pb-12 md:py-10 lg:py-20 bg-[#fff] -mt-16 rounded-t-2xl lg:rounded-t-section rounded-b-2xl lg:rounded-b-section">
        <DynamicRequestView />
      </Section>
    </Section>
  );
}
