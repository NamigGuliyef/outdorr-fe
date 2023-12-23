import Section from "../../../UI/Section";
import AboutTop from "./AboutTop";
import Collection from "./Collection";

const DATA = [
  {
    id: 1,
    image: "pergola.png",
    text: "pergola",
  },
  {
    id: 2,
    image: "sunroom.png",
    text: "sunroom",
  },
  {
    id: 3,
    image: "louver.png",
    text: "louver",
  },
  {
    id: 4,
    image: "pergola.png",
    text: "pergola",
  },
  {
    id: 5,
    image: "sunroom.png",
    text: "sunroom",
  },
  {
    id: 6,
    image: "louver.png",
    text: "louver",
  },
];

export default function About() {
  return (
    <Section className="rounded-t-2xl lg:rounded-t-section bg-secondarygray -mt-8 md:-mt-16">
      <AboutTop />
      <Collection data={DATA} />
    </Section>
  );
}
