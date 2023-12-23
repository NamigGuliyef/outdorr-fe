/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import React from "react";

const ProductApplications = () => {
  return (
    <div className="container px-6 lg:px-0 mt-24">
      <div className="text-center flex flex-col gap-6 mb-14">
        <h1 className="text-5xl font-semibold text-darkgray">
          Product Application
        </h1>
        <p className="text-2xl">Vel viverra in mi quis. Egestas neque</p>
      </div>
      <div className="hidden gap-6 grid-cols-12 max-h-[755px]">
        <div className="flex flex-col h-full col-span-4 gap-6">
          <div
            className="bg-secondarygray flex flex-col gap-6 p-8 rounded-[30px] text-secondaryblack"
            id="applicationCard"
          >
            <h2 className="font-semibold text-2xl">Application 1</h2>
            <p className="leading-[150%]">
              Venenatis neque odio tempor proin ultrices arcu turpis amet
              iaculis. Cursus maecenas tristique eget.
            </p>
          </div>
          <div
            className="bg-secondarygray flex flex-col gap-6 p-8 rounded-[30px] text-secondaryblack"
            id="applicationCard"
          >
            <h2 className="font-semibold text-2xl">Application 1</h2>
            <p className="leading-[150%]">
              Venenatis neque odio tempor proin ultrices arcu turpis amet
              iaculis. Cursus maecenas tristique eget.
            </p>
          </div>
          <div
            className="bg-secondarygray flex flex-col gap-6 p-8 rounded-[30px] text-secondaryblack"
            id="applicationCard"
          >
            <h2 className="font-semibold text-2xl">Application 1</h2>
            <p className="leading-[150%]">
              Venenatis neque odio tempor proin ultrices arcu turpis amet
              iaculis. Cursus maecenas tristique eget.
            </p>
          </div>
          <div
            className="bg-secondarygray flex flex-col gap-6 p-8 rounded-[30px] text-secondaryblack"
            id="applicationCard"
          >
            <h2 className="font-semibold text-2xl">Application 1</h2>
            <p className="leading-[150%]">
              Venenatis neque odio tempor proin ultrices arcu turpis amet
              iaculis. Cursus maecenas tristique eget.
            </p>
          </div>
        </div>
        <div className="col-span-4 h-full flex">
          <div className="rounded-[25px] flex overflow-hidden">
            <Image
              className="flex "
              src={"/images/products-page/Image.png"}
              alt=""
              width={450}
              height={712}
            />
          </div>
        </div>
        <div className="col-span-4 grid grid-rows-[3fr,1fr] gap-9 ">
          <div className="bg-blue-400 rounded-[15px] h-fit overflow-hidden">
            <img
              src="/images/products-page/inspire-3.png"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="bg-red-400 rounded-[25px] overflow-hidden">
            <img src="/images/products-page/inspire-2.png" className="h-fit " />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 lg:max-h-[744px] gap-6">
        <div className="flex flex-col h-full col-span-4 gap-6">
          <div
            className="bg-secondarygray flex flex-col gap-6 p-8 rounded-[30px] text-secondaryblack"
            id="applicationCard"
          >
            <h2 className="font-semibold text-2xl">Application 1</h2>
            <p className="leading-[150%]">
              Venenatis neque odio tempor proin ultrices arcu turpis amet
              iaculis. Cursus maecenas tristique eget.
            </p>
          </div>
          <div
            className="bg-secondarygray flex flex-col gap-6 p-8 rounded-[30px] text-secondaryblack"
            id="applicationCard"
          >
            <h2 className="font-semibold text-2xl">Application 1</h2>
            <p className="leading-[150%]">
              Venenatis neque odio tempor proin ultrices arcu turpis amet
              iaculis. Cursus maecenas tristique eget.
            </p>
          </div>
          <div
            className="bg-secondarygray flex flex-col gap-6 p-8 rounded-[30px] text-secondaryblack"
            id="applicationCard"
          >
            <h2 className="font-semibold text-2xl">Application 1</h2>
            <p className="leading-[150%]">
              Venenatis neque odio tempor proin ultrices arcu turpis amet
              iaculis. Cursus maecenas tristique eget.
            </p>
          </div>
          <div
            className="bg-secondarygray flex flex-col gap-6 p-8 rounded-[30px] text-secondaryblack"
            id="applicationCard"
          >
            <h2 className="font-semibold text-2xl">Application 1</h2>
            <p className="leading-[150%]">
              Venenatis neque odio tempor proin ultrices arcu turpis amet
              iaculis. Cursus maecenas tristique eget.
            </p>
          </div>
        </div>
        <div className="col-span-4 lg:max-h-[744px]">
          <div className="rounded-[25px] h-full flex overflow-hidden">
            <Image
              className="flex h-full"
              src={"/images/products-page/Image.png"}
              alt=""
              width={450}
              height={712}
            />
          </div>
        </div>
        <div className="col-span-4 lg:max-h-[744px] flex flex-col gap-9">
          <Image
            alt="Image"
            src={"/images/products-page/inspire-3.png"}
            className="w-full h-[55%] lg:object-cover rounded-2xl lg:rounded-2.5xl"
            width={424}
            height={587}
          />
          <Image
            alt="Image"
            src={"/images/products-page/inspire-2.png"}
            className="w-full h-[45%] lg:object-cover rounded-2xl lg:rounded-2.5xl"
            width={424}
            height={587}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductApplications;
