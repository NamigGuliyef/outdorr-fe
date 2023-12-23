"use client";
import { Form, Formik, FormikFormProps } from "formik";
import Image from "next/image";
import { IoChevronForwardSharp } from "react-icons/io5";
import * as Yup from "yup";
import RequestPersonal from "./RequestPersonal";
import RequestProjectInfo from "./RequestProjectInfo";
import useRequestProperties from "@/hooks/useRequestProperties";
import axios from "axios";
import toast from "react-hot-toast";

// const validationSchema = Yup.object().shape({
//   first_name: Yup.string().required("First name is required"),
//   last_name: Yup.string().required("Last name is required"),
//   email: Yup.string().email("Invalid email").required("Email is required"),
//   phone_number: Yup.string().required("Number is required"),
//   countryCode: Yup.string().required("Please select country"),
//   country: Yup.string(),
//   state: Yup.string(),
//   city: Yup.string(),
//   postalCode: Yup.string(),
// });

// const validationSchema = Yup.object().shape({
//   first_name: Yup.string().required("First name is required"),
//   last_name: Yup.string().required("Last name is required"),
//   phone_number: Yup.string().required("Number is required"),
//   email: Yup.string().email("Invalid email").required("Email is required"),
//   // country: "",
//   // files: "",
//   // state: "",
//   // city: "",
//   // zipcode: "",
//   // main_structure_model: "",
//   // width_in_feet: 0,
//   // projection_in_feet: 0,
//   // height_in_feet: 0,
//   // structure_situation: "",
//   // structure_color: "",
//   // window_and_doors: "",
//   // sunscreens: "",
//   // project_details: "",
//   // about_us: "",
//   // countryCode: "",
//   // number: "",
// });
const initialValues = {
  first_name: "",
  last_name: "",
  phone_number: "",
  email: "",
  country: "",
  files: "",
  state: "",
  city: "",
  zipcode: "",
  main_structure_model: "",
  width_in_feet: 0,
  projection_in_feet: 0,
  height_in_feet: 0,
  structure_situation: "",
  structure_color: "",
  window_and_doors: "",
  sunscreens: "",
  project_details: "",
  about_us: "",
  countryCode: "",
  number: "",
};
export interface MyFormProps extends FormikFormProps {
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  country: string;
  files: any;
  state: string;
  city: string;
  zipcode: string;
  main_structure_model: string;
  width_in_feet: number;
  projection_in_feet: number;
  height_in_feet: number;
  structure_situation: string;
  structure_color: string;
  window_and_doors: string;
  sunscreens: string;
  project_details: string;
  about_us: string;
  countryCode: string;
  number: string;
}

const SendRequest = () => {
  const { width, height, projection } = useRequestProperties();
  const handleSubmit = async (form: MyFormProps) => {
    const postData = {
      first_name: form.first_name,
      last_name: form.last_name,
      phone_number: form.countryCode + form.phone_number,
      email: form.email,
      country: form.country,
      state: form.state,
      city: form.city,
      files: form.files,
      zipcode: form.zipcode,
      main_structure_model: form.main_structure_model,
      width_in_feet: form.width_in_feet,
      projection_in_feet: form.projection_in_feet,
      height_in_feet: form.height_in_feet,
      structure_situation: form.structure_situation,
      structure_color: form.structure_color,
      window_and_doors: form.window_and_doors,
      sunscreens: form.sunscreens,
      project_details: form.project_details,
      about_us: form.about_us,
    };
    console.log(postData);
    const formData = new FormData();

    for (const [key, value] of Object.entries(postData)) {
      console.log(`${key}: ${value}`);
      if (key === "files") {
        for (let i = 0; i < postData.files.length; i++) {
          formData.append("files", postData.files[i]);
        }
      } else {
        formData.append(key, value);
      }
    }
    const res = await axios
      .post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/request-project`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        if (res.status === 201) {
          toast.success("Successfully sent message!");
        }
      });
  };
  return (
    <div className="container px-6 lg:px-0 flex flex-col xl:flex-row gap-6">
      <div className="w-full relative lg:p-5 bg-[#E1E2E4] xl:w-1/2 xl:max-w-[50%] min-h-[327px] xl:min-h-[879px] rounded-2.5xl overflow-hidden">
        <div className="relative h-full items-center flex gap-12 xl:gap-0 xl:flex-col justify-between max-h-[327px] md:max-h-full">
          <div className="lg:w-[90%] hidden lg:block lg:h-1/2 mx-auto">
            <Image
              src="/images/request-page/3d.png"
              alt="Hero Image"
              quality={75}
              width={500}
              height={500}
              className="relative z-10 xl:mt-8 mx-auto"
            />
          </div>
          <div className="relative bg-white flex flex-col justify-center items-center lg:h-1/2 mx-auto w-full md:max-h-[420px] xl:max-h-max xl:w-[98%] rounded-2.5xl xl:mb-1">
            <Image
              src="/images/request-page/model.png"
              alt="Hero Image"
              quality={75}
              width={500}
              height={500}
              className="lg:block hidden relative z-10 mx-auto w-full lg:w-[70%] xl:w-[70%] mt-8 h-auto"
            />
            <Image
              src="/images/request-page/Image.png"
              alt="Hero Image"
              quality={75}
              width={500}
              height={500}
              className="block lg:hidden w-full h-full relative z-10 xl:mt-8 mx-auto"
            />
            <div className="hidden lg:block absolute w-[72px] xl:bottom-[23%] xl:left-[23%] left-[18%] bottom-[4%] z-10 font-black transform -skew-x-[37deg] skew-y-[25deg]">
              Width
              <br />
              {width}`<span className="font-normal">feet</span>
            </div>
            <div className="hidden lg:block absolute w-[72px] xl:bottom-[32%] xl:right-[13%] right-[10%] bottom-[18%] z-10 font-black transform -skew-x-[25deg] skew-y-[17deg]">
              Projection
              <br />
              {projection}`<span className="font-normal">feet</span>
            </div>
            <div className="hidden lg:block absolute w-[72px] xl:right-[6%] right-[3%] top-[42%] z-10 font-black transform -skew-x-[9deg] skew-y-[20deg]">
              Height
              <br />
              {height}`<span className="font-normal">feet</span>
            </div>
            <div className="hidden lg:block w-2 absolute bg-[#E1E2E4] top-4 left-4 rounded-full h-2"></div>
            <div className="hidden lg:block w-2 absolute bg-[#E1E2E4] top-4 right-4 rounded-full h-2"></div>
          </div>
        </div>

        <div className="hidden lg:block w-2 absolute bg-white top-4 left-4 rounded-full h-2"></div>
        <div className="hidden lg:block w-2 absolute lg:bg-white xl:bg-[#E1E2E4] bottom-4 left-4 rounded-full h-2"></div>
        <div className="hidden lg:block w-2 absolute bg-white top-4 right-4 rounded-full h-2"></div>
        <div className="hidden lg:block w-2 absolute lg:bg-white xl:bg-[#E1E2E4] bottom-4 right-4 rounded-full h-2"></div>
      </div>
      <Formik
        validateOnBlur={false}
        validateOnChange={false}
        // validationSchema={validationSchema}
        onSubmit={handleSubmit}
        initialValues={initialValues}
      >
        {({ errors, touched }) => (
          <Form className="relative w-full xl:w-1/2 xl:max-w-[50%] flex text-darkgray flex-col gap-6">
            <RequestPersonal errors={errors} />
            <RequestProjectInfo errors={errors} />
            <button
              type="submit"
              className={` py-5 px-9 bg-black text-white flex items-center border-2 hover:text-black border-black hover:bg-white font-helvetica text-lg
             transition-all duration-500 cursor-pointer rounded-full`}
            >
              <div className="flex items-center h-[21px] justify-between w-full">
                Request Project
                <IoChevronForwardSharp size={20} />
              </div>
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SendRequest;
