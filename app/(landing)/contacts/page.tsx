import { PageWrapper } from "@/components/PageWrapper";
import Section from "@/components/UI/Section";
import { Contact, Map } from "@/components/Views/Contactspage";
import HaveAQuestion from "@/components/Views/Contactspage/HaveAQuestion";
import { IContacts } from "@/types/types";

async function getData(): Promise<IContacts> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/contacts`, {
    next: { revalidate: 60 },
  });
  return res.json();
}

export default async function Contacts() {
  const contacts = await getData();
  return (
    <PageWrapper>
      <Section className="mt-24 lg:mt-[88px]">
        <Section className="relative font-sf z-10 py-8 lg:py-20 bg-secondarygray rounded-t-[16px] lg:rounded-t-section rounded-b-[16px] lg:rounded-b-section">
          <div className="container px-6 lg:px-0 mb-10 lg:mb-12 text-darkgray flex flex-col gap-12 lg:gap-0 lg:flex-row justify-between">
            <Contact conctactsData={contacts[0]} />
            <Map data={contacts[0]} />
          </div>
          {/* <div className="container px-6 lg:px-0">
            <div className="border-t pt-10 lg:pt-12 border-[#1d1d1d] flex flex-col gap-3 mb-4">
              <h1 className="text-3.2xl md:text-5xl font-semibold text-darkgray">
                Have a question?
              </h1>
              <p className="text-2xl text-gray-400">
                We are working 24/7 to help you to get the best out of our
                services
              </p>
            </div>
            <HaveAQuestion />
          </div> */}
        </Section>
      </Section>
    </PageWrapper>
  );
}
