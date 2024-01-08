import SecondNavLink from "./SecondNavLink";

const LINKS = [
  {
    id: 1,
    text: "About Us",
    to: '#'
  },
  {
    id: 2,
    text: "Our Projects",
    to: '/projects',
  },
  {
    id: 3,
    text: "Request Now",
    to: '/request'
  },
  {
    id: 4,
    text: "Tailored Design",
    to: '/contacts'
  },
];

export default function SecondNav() {
  return (
    <ul className="flex flex-wrap pr-16 sm:pr-0 lg:flex-nowrap items-center border-b border-white md:border-none pb-12 md:pb-24 gap-8 md:gap-16 font-light font-sf sm:justify-center">
      {LINKS.map((link) => (
        <SecondNavLink to={link.to} key={link.id}>{link.text}</SecondNavLink>
      ))}
    </ul>
  );
}
