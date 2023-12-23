/* eslint-disable @next/next/no-img-element */
"use client";
import NotFoundPage from "@/app/(dashboard)/admin/not-found";
import { PageWrapper } from "@/components/PageWrapper";
import Preloader from "@/components/admin/Preloader";
import { Input as ShadInput } from "@/components/admin/ui/input";
import {
  IFeature,
  IProject,
  IProjectNeed,
  ISubProductFeature,
} from "@/types/types";
import {
  Button,
  Card,
  Input,
  RadioGroup,
  Radio,
  Select,
  SelectItem,
} from "@nextui-org/react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

const ProjectsPage = ({ params }: { params: { slug: string } }) => {
  const [data, setData] = useState<IProject | null>(null);
  const [needs, setNeeds] = useState<IProjectNeed[] | null>(null);
  const [features, setFeatures] = useState<IFeature[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedType, setSelectedType] = useState("Home");
  const projectFeatures = features?.filter((feature) => feature.projectId);
  const { data: session, status } = useSession();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_BACKEND_URL + `/projects/${params.slug}`
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    };
    const fetchNeeds = async () => {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_BACKEND_URL + "/admin/dashboard/projectneeds",
          {
            headers: {
              Authorization: `Bearer ${session?.user.token}`,
            },
          }
        );
        setNeeds(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    };
    const fetchFeatures = async () => {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_BACKEND_URL + "/admin/dashboard/features",
          {
            headers: {
              Authorization: `Bearer ${session?.user.token}`,
            },
          }
        );
        setFeatures(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    };
    const fetchUsedProducts = async () => {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_BACKEND_URL + "/admin/dashboard/projectneeds",
          {
            headers: {
              Authorization: `Bearer ${session?.user.token}`,
            },
          }
        );
        setNeeds(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    };
    if (session?.user.token) {
      fetchData();
      fetchNeeds();
      fetchFeatures();
      fetchUsedProducts();
      setLoading(false);
    }
  }, [session?.user.token, params.slug]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();
  const router = useRouter();
  const onSubmit: SubmitHandler<FieldValues> = async (
    formSubmitData,
    event
  ) => {
    const postData = new FormData();
    for (let [key, value] of Object.entries(formSubmitData)) {
      if (key === "photos" && value && value.length > 1) {
        for (let i = 0; i < value.length; i++) {
          postData.append("photos", value[i]);
        }
      } else if (key !== "photos" && value != null && value !== "") {
        postData.append(key, value);
      }
    }

    const res = await axios
      .patch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/dashboard/projects/${data?._id}`,
        postData,
        {
          headers: {
            Authorization: `Bearer ${session?.user.token!}`,
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        setLoading(false);
        toast.success("Successfully updated project!");
        router.push("/admin/dashboard/projects");
      })
      .catch((err) => {
        if (err.response.status === 409) {
          toast.error("There's a project with that name already!");
        }
        setLoading(false);
      });
  };

  if (error) return <NotFoundPage />;
  return (
    <div className="container mt-6 mx-auto px-6 max-w-[1280px]">
      {loading ? (
        <div className="h-screen">
          <Preloader />
        </div>
      ) : (
        <PageWrapper>
          <h1 className="text-5xl">Project data</h1>
          <Card className="p-4 mt-8">
            <form
              className="flex flex-col gap-8"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Input
                {...register("title")}
                isDisabled={loading}
                label="Title"
                type="text"
                name="title"
                size="lg"
                id="title"
                variant="underlined"
                defaultValue={data?.title!}
                placeholder="Enter your title"
              />
              <Input
                {...register("description")}
                isDisabled={loading}
                label="Description"
                type="text"
                name="description"
                size="lg"
                id="description"
                variant="underlined"
                defaultValue={data?.description}
                placeholder="Enter your description"
              />
              <Input
                {...register("used_products_joint")}
                isDisabled={loading}
                label="Used products joint"
                type="text"
                name="used_products_joint"
                size="lg"
                id="used_products_joint"
                variant="underlined"
                defaultValue={data?.used_products_joint}
                placeholder="Enter your used products joint"
              />
              <Input
                {...register("location")}
                isDisabled={loading}
                label="location"
                type="text"
                name="location"
                size="lg"
                id="location"
                variant="underlined"
                defaultValue={data?.location}
                placeholder="Enter your location"
              />
              {needs && (
                <Select
                  items={needs}
                  label="Needs"
                  color="default"
                  selectionMode="single"
                  {...register("needsId")}
                  variant="underlined"
                  placeholder="Select needs"
                >
                  {(need) => (
                    <SelectItem value={need._id} key={need._id}>
                      {need.title}
                    </SelectItem>
                  )}
                </Select>
              )}
              {features && (
                <Select
                  items={projectFeatures}
                  label="Features"
                  color="default"
                  selectionMode="single"
                  {...register("featuresId")}
                  variant="underlined"
                  placeholder="Select features"
                >
                  {(feature) => (
                    <SelectItem value={feature._id} key={feature._id}>
                      {feature.title}
                    </SelectItem>
                  )}
                </Select>
              )}
              <RadioGroup
                orientation="horizontal"
                label="Select type of project"
                value={selectedType}
                onValueChange={setSelectedType}
              >
                <Radio value="Home">Home</Radio>
                <Radio value="Business">Business</Radio>
              </RadioGroup>
              <ShadInput
                id="file"
                placeholder="file"
                {...register("photos")}
                color="primary"
                required={false}
                className="file:bg-primary flex items-center justify-center h-[64px] file:shadow-lg file:hover:cursor-pointer file:text-white hover:file:bg-primary/90 file:py-2 file:mt-1 file:px-4 file:rounded-large"
                type="file"
                multiple
              />

              <Button
                className="rounded-[8px]"
                size="lg"
                color="primary"
                type="submit"
              >
                Submit
              </Button>
            </form>
          </Card>
        </PageWrapper>
      )}
    </div>
  );
};

export default ProjectsPage;
