import RequestInfo from "@/components/landing/Common/RequestInfo";
import { PageWrapper } from "@/components/PageWrapper";
import Section from "@/components/landing/UI/Section";
import Heading from "@/components/landing/pages/TailoredDesignPage/Heading";
import TailoredCard, {
  IDesign,
} from "@/components/landing/pages/TailoredDesignPage/TailoredCard";

const getPageData = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/project-design`,
    {
      next: { revalidate: 60 },
    }
  );
  return res.json();
};

export default async function page() {
  const data = await getPageData();
  const { title, description, design_details } = data[0];
  return (
    <PageWrapper>
      <Section className="container px-6 lg:px-0 mt-24 lg:mt-[88px]">
        <Section className="container pt-20">
          <Heading title={title} description={description} />
          <div
            className="mt-20 flex flex-col gap-12 lg:gap-20 text-darkgray font-sf"
            id="cards"
          >
            {design_details.map((design: IDesign, idx: number) => (
              <TailoredCard key={idx} data={design} />
            ))}
          </div>
        </Section>
        <div className="mt-12 mb-12 pb-20 md:mt-20 md:mb-20">
          <RequestInfo />
        </div>
      </Section>
    </PageWrapper>
  );
}
