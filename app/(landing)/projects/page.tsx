export const dynamic = 'force-dynamic'
import Request from "@/components/Common/Request";
import Section from "@/components/UI/Section";
import { Hero } from "@/components/Views/Projectspage";
import ProjectsHeading from "@/components/Views/Projectspage/ProjectsHeading";
import ProjectsList from "@/components/Views/Projectspage/ProjectsList";

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
