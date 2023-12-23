import Footer from "@/components/UI/Footer";
import Header from "@/components/UI/Header";
import { Toaster } from "react-hot-toast";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 1500,
          className: "text-sm sm:text-md md:text-lg",
          style: {
            borderRadius: "10px",
            background: "#333",
            borderColor: "#fff",
            color: "#fff",
            maxWidth: '370px',
            width: 'fit-content'
          },
        }}
      />
      <div className="relative z-10 !font-sf">{children}</div>
      <Footer />
    </>
  );
}
