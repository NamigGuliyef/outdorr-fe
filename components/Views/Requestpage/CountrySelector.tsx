"use client";
import React, { useState } from "react";
import Select, {components} from "react-select";
import { Country, ICountry, IState, State } from "country-state-city";
import clsx from "clsx";
import { useFormikContext } from "formik";

interface CountrySelectProps {
  value?: string;
  onChange?: (value: string) => void;
}
interface SelectOption {
  value: string;
  label: string | React.JSX.Element;
}
const dropdownIndicatorStyles =
  "mr-2 text-gray-500 rounded-md hover:text-black";
const controlStyles =
  "focus:outline-none !rounded-[8px] px-2 font-sf !text-[#ABAFB1] focus:border-none hover:cursor-pointer !shadow-none !border-[#ABAFB1] py-2 h-[58px]";

const CountrySelect: React.FC<CountrySelectProps> = ({ value, onChange }) => {
  const { setFieldValue } = useFormikContext();
  const countries = Country.getAllCountries();

  countries.sort((a: ICountry, b: ICountry) => {
    return a.name.localeCompare(b.name);
  });

  const options = countries.map((country) => ({
    label: (
      <div className="flex gap-2 items-center">
        <svg className="w-[35px] h-6">
          <use xlinkHref={`/flags.svg#${country.isoCode.toLowerCase()}`} />
        </svg>
        {"+" +
          (country.phonecode.startsWith("+")
            ? country.phonecode.substring(1)
            : country.phonecode)}
      </div>
    ),
    value: country.phonecode,
  }));
  const [selectedCountry, setSelectedCountry] = useState<SelectOption | null>(
    null
  );

  return (
    <Select
      placeholder="Country Code"
      options={options}
      id="country-select"
      isSearchable={true}
      defaultValue={selectedCountry}
      onChange={(e) => setFieldValue("countryCode", "+" + e?.value)}
      styles={{
        input: (base) => ({
          ...base,
          "input:focus": {
            boxShadow: "none",
            outline: "none",
          },
        }),
      }}
      classNames={{
        container: () => "w-full md:w-fit",
        input: () => " font-sf !text-[#ABAFB1] py-0.5 focus:outline-none",
        control: () => controlStyles,
        indicatorSeparator: () => "hidden",
        menu: () => "!w-[170px] top-3/4",
        dropdownIndicator: () => dropdownIndicatorStyles,
        singleValue: () => "!text-[#ABAFB1] !font-sf",
        menuList: () => "w-[170px]",
        option: ({ isFocused, isSelected }) =>
          clsx(
            isFocused && "!bg-[#abafb28f]",
            isSelected && "!bg-[#ABAFB1]",
            "hover:bg-[#ABAFB1] transition-all !text-[#333] duration-300 hover:cursor-pointer"
          ),
        placeholder: () => "font-sf text-[#ABAFB1] text-base",
      }}
      instanceId="country-select"
    />
  );
};

export default CountrySelect;
