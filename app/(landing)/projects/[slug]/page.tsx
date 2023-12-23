import Button from "@/components/Common/Button";
import Request from "@/components/Common/Request";
import Section from "@/components/UI/Section";
import ProjectsSlider from "@/components/Views/ProjectDetailspage/Projects";
import ProjectsDetailSlider from "@/components/Views/ProjectDetailspage/ProjectsDetailSlider";
import { IExtendedProject, IProject } from "@/types/types";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-fade";

async function getProjectData(slug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/projects/${slug}`,
    {
      next: { revalidate: 60 },
    }
  );
  return res.json();
}
async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/projects`, {
    next: { revalidate: 60 },
  });
  return res.json();
}

async function ProjectDetails({ params }: { params: { slug: string } }) {
  const project: IExtendedProject = await getProjectData(params.slug);
  console.log(project);
  const projects = await getData();
  const {
    title,
    description,
    used_products_joint,
    location,
    needsId,
    featuresId,
    usedProductsId,
  } = project;
  return (
    <Section className="mt-24 lg:mt-[88px]">
      <Section className="container mt-36 px-6 lg:px-0 gap-6">
        <div className="flex flex-col gap-6 md:gap-0 md:flex-row font-sf text-darkgray">
          <div className="md:w-7/12">
            <h1 className="text-3.2xl font-semibold md:font-normal md:text-7.2xl capitalize">
              {title}
            </h1>
          </div>
          <div className="md:w-5/12">
            <div className="flex flex-col gap-2">
              <div className="rounded-[100px] flex gap-3 font-medium md:font-normal md:gap-6 bg-lightgray w-fit p-3 md:p-4">
                <Image
                  src={"/images/projects-page/icon-travel.svg"}
                  width={24}
                  height={24}
                  alt="icon-travel"
                />
                <span className="text-base md:text-2xl lg:text-xl xl:text-2xl text-darkgray">
                  {location}
                </span>
              </div>
              <div className="rounded-[100px] flex gap-3 font-medium md:font-normal md:gap-6 bg-lightgray w-fit p-3 md:p-4">
                <Image
                  src={"/images/projects-page/icon-home.svg"}
                  width={24}
                  height={24}
                  alt="icon-home"
                />
                <span className="text-base md:text-2xl lg:text-xl xl:text-2xl text-darkgray">
                  {used_products_joint}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="font-sf text-xl mt-12 md:mt-14 md:text-3.2xl text-darkgray leading-[125%]">
          {description}
        </div>
      </Section>
      <ProjectsDetailSlider data={project} />
      <Section className="container font-sf px-6 mt-60px lg:px-0 flex flex-col gap-6 flex-wrap">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="rounded-[30px] md:w-1/2 p-6 lg:p-8 lg:min-h-[248px] h-auto flex flex-col gap-6 text-darkgray border border-[#BABABA]">
            <h1 className="text-2xl text-secondaryblack font-semibold">
              Project needs
            </h1>
            <p>{needsId?.description}</p>
          </div>
          <div className="rounded-[30px] md:w-1/2 p-6 lg:p-8 lg:min-h-[248px] h-min flex flex-col gap-6 text-darkgray border border-[#BABABA]">
            <h1 className="text-2xl text-secondaryblack font-semibold">
              {featuresId[0]?.title}
            </h1>
            <div className="flex flex-col gap-4">{featuresId[0]?.description}</div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="rounded-[30px] order-2 md:order-1 md:w-1/2 p-6 lg:p-14 flex flex-col justify-between text-darkgray min-h-[540px] md:min-h-[444px] border border-[#BABABA]">
            <div className="flex flex-col gap-6">
              <p className="text-base font-light">USED PRODUCTS</p>
              <h1 className="text-3.2xl md:text-5xl capitalize text-darkgray font-semibold">
                {usedProductsId?.title} used in this Project
              </h1>
              <p className="text-2xl">{usedProductsId?.description}</p>
            </div>
            <Button
              to="#"
              className="mt-12 md:mt-0 w-9/12 md:w-1/2 font-sf font-semibold py-5 px-6"
            >
              Find Out More
            </Button>
          </div>
          <div className="rounded-[30px] order-1 md:order-2 md:w-1/2 overflow-hidden max-h-[327px] sm:max-h-[450px] md:max-h-[648px]">
            <Image
              alt="Inspire"
              src="/images/projects-page/imageabout.png"
              className="h-full max-h-full block w-full object-cover aspect-auto md:object-cover"
              height={648}
              width={648}
            />
          </div>
        </div>
      </Section>

      <Section className="mt-60px px-6 py-12 lg:p-60px border rounded-2xl lg:rounded-section border-[#D2D4D4]">
        <ProjectsSlider projects={projects} />
      </Section>

      <Section className="container px-6 lg:px-0 flex justify-center mt-60px mb-60px pb-16">
        <Request size="lg" />
      </Section>
    </Section>
  );
}

export default ProjectDetails;
export const revalidate = 60;
