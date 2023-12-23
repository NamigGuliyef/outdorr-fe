'use client'
import clsx from "clsx";
import { Country, ICountry, IState, State } from "country-state-city";
import { useFormikContext } from "formik";
import { useId, useState } from "react";
import Select, { ActionMeta, SingleValue } from "react-select";

interface SelectOption {
  value: string;
  label: string;
}

const dropdownIndicatorStyles =
  "mr-2 text-gray-500 rounded-md hover:text-black";
const controlStyles =
  "focus:outline-none !rounded-[8px] px-2 font-sf !text-[#ABAFB1] focus:border-none hover:cursor-pointer !shadow-none !border-[#ABAFB1] py-2 h-[58px]";

function LocationSelector() {
  const [selectedCountry, setSelectedCountry] = useState<SelectOption | null>({
    value: "US",
    label: "United States",
  });
  const [selectedState, setSelectedState] = useState<SelectOption | null>({
    value: "CA",
    label: "California",
  });
  const { setFieldValue } = useFormikContext();

  const handleCountryChange = (
    newValue: SingleValue<SelectOption>,
    actionMeta: ActionMeta<SelectOption>
  ) => {
    setSelectedCountry(newValue);
    setFieldValue("country", newValue?.label);
  };

  const mapCountryToSelectOption = (country: ICountry): SelectOption => ({
    value: country.isoCode,
    label: country.name,
  });
  const mapStateToSelectOption = (state: IState): SelectOption => ({
    value: state.isoCode,
    label: state.name,
  });
  const countryOptions: SelectOption[] = Country.getAllCountries().map(
    mapCountryToSelectOption
  );
  const stateOptions: SelectOption[] = State.getStatesOfCountry(
    selectedCountry?.value
  ).map(mapStateToSelectOption);

  const handeStateChange = (
    newValue: SingleValue<SelectOption>,
    actionMeta: ActionMeta<SelectOption>
  ) => {
    setSelectedState(newValue);
    setFieldValue("state", newValue?.label);
  };
  return (
    <div className="flex flex-col md:flex-row gap-5">
      <Select
        name="country"
        id="country"
        options={countryOptions}
        value={selectedCountry}
        onChange={handleCountryChange}
        placeholder="Country"
        instanceId={useId()}
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
          container: () => "w-full md:w-1/2",
          input: () => " font-sf !text-[#ABAFB1] py-0.5 focus:outline-none",
          control: () => controlStyles,
          indicatorSeparator: () => "hidden",
          dropdownIndicator: () => dropdownIndicatorStyles,
          singleValue: () => "!text-[#ABAFB1] !font-sf",
          option: ({ isFocused, isSelected }) =>
            clsx(
              isFocused && "!bg-[#abafb28f]",
              isSelected && "!bg-[#ABAFB1]",
              "hover:bg-[#ABAFB1] transition-all !text-[#333] duration-300 hover:cursor-pointer"
            ),
          placeholder: () => "font-sf text-[#ABAFB1] text-base",
        }}
      />
      <Select
        name="State"
        id="State"
        instanceId={useId()}
        options={stateOptions}
        value={selectedState}
        onChange={handeStateChange}
        placeholder="State"
        isDisabled={selectedCountry?.value ? false : true}
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
          container: () => "w-full md:w-1/2",
          input: () => " font-sf !text-[#ABAFB1] py-0.5 focus:outline-none",
          control: () => controlStyles,
          indicatorSeparator: () => "hidden",
          dropdownIndicator: () => dropdownIndicatorStyles,
          singleValue: () => "!text-[#ABAFB1] !font-sf",
          option: ({ isFocused, isSelected }) =>
            clsx(
              isFocused && "!bg-[#abafb28f]",
              isSelected && "!bg-[#ABAFB1]",
              "hover:bg-[#ABAFB1] transition-all !text-[#333] duration-300 hover:cursor-pointer"
            ),
          placeholder: () => "font-sf text-[#ABAFB1] text-base",
        }}
      />
    </div>
  );
}
export default LocationSelector;
