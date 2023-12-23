"use client";
import React, { useState } from "react";
import Button from "@/components/Common/Button";
import Section from "@/components/UI/Section";
import { ISubProduct } from "@/types/types";

function ProductSpecs({ product }: { product: ISubProduct }) {
  const [isAccordionOpen, setIsAccordionOpen] = useState(true);

  return (
    <Section className="md:container md:px-6 lg:px-0">
      <div className="border-t pt-8 border-[#BABABA]">
        <div className="flex flex-col">
          <div className="flex mx-6 md:mx-0 items-center justify-between">
            <h1 className="text-black text-3.2xl !font-sf md:text-5xl font-medium">
              Specifications
            </h1>
            <div
              className={`cursor-pointer transition-all duration-500 ${
                isAccordionOpen ? "rotate-0" : "rotate-180"
              }`}
              onClick={() => setIsAccordionOpen(!isAccordionOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
              >
                <path
                  d="M13 7L7 1L1 7"
                  stroke="#717786"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="pt-14">
            <div
              className={`font-medium text-sm md:text-lg md:leading-8 grid grid-rows-1 overflow-hidden transition-[grid-template-rows] duration-500 ease-in-out ${
                isAccordionOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden flex flex-col justify-center">
                {product.specifications.map((spec, idx) => (
                  <div
                    key={spec._id}
                    className={`flex ${
                      idx % 2 === 0 ? "bg-[#F0F2F3]" : ""
                    } row-item`}
                  >
                    <div
                      className="w-6/12 md:w-4/12 flex items-center py-3 px-4 text-[#717786] font-light"
                      id="inner"
                    >
                      {spec.key}
                    </div>
                    <div
                      className="w-6/12 h-full flex items-center md:w-8/12 py-3 px-4 text-black"
                      id="inner"
                    >
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Button
            to="#"
            className="px-6 py-5 mt-12 font-sf font-medium text-darkgray"
          >
            Learn More
          </Button>
        </div>
      </div>
    </Section>
  );
}

export default ProductSpecs;
