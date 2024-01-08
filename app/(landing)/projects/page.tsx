export const dynamic = 'force-dynamic'
import Request from "@/components/landing/Common/Request";
import Section from "@/components/landing/UI/Section";
import { Hero } from "@/components/landing/pages/Projectspage";
import ProjectsHeading from "@/components/landing/pages/Projectspage/ProjectsHeading";
import ProjectsList from "@/components/landing/pages/Projectspage/ProjectsList";

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/projects`, {
    next: { revalidate: 60 },
  });
  return res.json();
}

export default async function Projects() {
  const projects = await getData();
  return (
    <Section className="mt-24 lg:mt-[88px]">
      <Hero />
      <Section className="bg-white font-sf relative z-10 rounded-t-2xl lg:rounded-t-section -mt-8 md:-mt-16">
        <ProjectsHeading />
        <ProjectsList data={projects} />
      </Section>
      <Section className="bg-white pb-20 px-6 lg:px-0 rounded-b-2xl lg:rounded-b-section flex justify-center">
        <div className="container">
          <Request size={"lg"} />
        </div>
        
      </Section>
    </Section>
  );
}
