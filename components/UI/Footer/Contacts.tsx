"use client";
import { FaSquarePinterest, FaLinkedin } from "react-icons/fa6";
import Image from "next/image";
import { FaChevronRight, FaFacebookSquare, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
export default function Contacts() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.length <= 0) {
      setErrorMessage("Email is required");
    } else {
      setErrorMessage(null);
    }
    axios
      .post(process.env.NEXT_PUBLIC_BACKEND_URL + "/subscribers", {
        email,
      })
      .then((res) => {
        if (res.status === 201 || res.status === 200) {
          toast.success("Subscribed successfully", {
            style: {
              border: "1px solid black",
            },
          });
        } else {
          return;
        }
      })
      .catch((err) => {
        if (err.response.status === 409) {
          toast.success("You've already signed up for the newsletter!");
        } else {
          toast.error("Unexpected error: " + err.response.status);
        }
      });
  };
  return (
    <div className="grid font-sf pt-12 md:pt-0 grid-cols-1 md:grid-cols-12">
      <div className="grid grid-cols-2 md:col-span-5 gap-[72px]">
        <div className="text-white font-light">
          <h2>Contact</h2>
          <p className="opacity-60 text-xs mt-6">
            900 Pepper Tree Ln, Suit 500
            <br />
            Santa Clara, CA 95051
          </p>
        </div>
        <div className="text-white font-light self-end">
          <p className="opacity-60 text-xs mt-6">
            info@outdorra.com
            <br />
            +1 (669) 301 0915
          </p>
        </div>
      </div>
      <div className="my-12 md:my-0 md:col-span-3 font-light text-white">
        <h1 className="mb-6 md:mb-10 lg:mb-6">Follow us</h1>
        <ul className="flex text-lg flex-row text-white gap-8">
          <li>
            <Link href={"#"}>
              <FaInstagram />
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              <FaFacebookSquare />
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              <FaLinkedin />
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              <FaSquarePinterest />
            </Link>
          </li>
        </ul>
      </div>
      <div className="text-white flex flex-col md:h-full md:justify-between md:col-start-9 md:col-span-3">
        <h1 className="font-light">Subscribe</h1>
        <form
          onSubmit={onSubmit}
          className="relative border-b-[0.5px] border-b-white border-opacity-30 md:w-[230px] lg:w-[304px] "
        >
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="bg-transparent pl-8 border-none py-3 md:w-[230px] lg:w-[304px] focus:placeholder:opacity-60 focus:border-none placeholder:transition-all focus:!outline-none focus:ring-0 outline-none placeholder:font-fs placeholder:text-sm placeholder:opacity-40"
            placeholder="Enter your email address"
          />
          <Image
            src={"/images/footer/Email.svg"}
            width={22}
            height={18}
            alt="Email"
            className="left-0 absolute top-1/2 -translate-y-1/2"
          />
          <button type="submit">
            <FaChevronRight
              size={14}
              color="white"
              className="absolute top-1/2 cursor-pointer -translate-y-1/2 right-2 lg:right-1"
            />
          </button>
          {errorMessage && (
            <div className="mt-2 absolute text-sm opacity-70 text-red-600">
              {errorMessage}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
