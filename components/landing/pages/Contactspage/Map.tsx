import { IContact } from "@/types/types";

export default function Map({ data }: { data: IContact }) {
  return (
    <div className="w-full lg:w-6/12" style={{ filter: "grayscale(75%)" }}>
      {/* <iframe
        src="https://www.google.com/maps/embed?hl=en&pb=!1m17!1m12!1m3!1d3151.7065488644225!2d144.96523971236223!3d-37.82034197185706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzfCsDQ5JzEzLjIiUyAxNDTCsDU4JzA0LjIiRQ!5e0!3m2!1sen!2sen!4v1689882352816!5m2!1sen!2sen&ll=-37.820123967358704,144.96797675107211&hl=en"
        allowFullScreen
        loading="lazy"
        className=" h-[327px] xl:w-[648px] w-full lg:h-[648px] border-2 border-black rounded-[16px] lg:rounded-[30px] overflow-hidden "
        referrerPolicy="no-referrer-when-downgrade"></iframe> */}
      <iframe
        loading="lazy"
        src="https://maps.google.com/maps?q=-37.82103928919786,144.96796714607072&hl=en;z=2&amp;output=embed"
        className="h-[327px] xl:w-[648px] w-full lg:h-[648px] border-2 border-black rounded-[16px] lg:rounded-[30px] overflow-hidden"
      ></iframe>
    </div>
  );
}
