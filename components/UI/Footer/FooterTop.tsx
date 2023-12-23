import Image from "next/image";

export default function FooterTop() {
  return (
    <div className="flex flex-col items-center text-center md:text-start gap-4 md:gap-12 justify-center mt-12 md:mt-[72px] mb-12 md:mb-14">
      <Image
        src={"/images/footer/logo.svg"}
        height={54}
        width={448}
        className="hidden md:block"
        alt="logo"
      />
      <Image
        src={"/images/footer/logoMobile.svg"}
        height={48}
        width={87}
        className="md:hidden block"
        alt="logo"
      />
      <p className="text-sm md:text-base text-white font-light">
        Sustainable Outdoor Living Structures I Custom Pergolas, Sunrooms,
        Louvers & ADU Modules
      </p>
    </div>
  );
}
