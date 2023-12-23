import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { PageWrapper } from "@/components/PageWrapper";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/admin/ui/card";
import { Button } from "@nextui-org/react";
import axios from "axios";
import { ArrowRight } from "lucide-react";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";

const fetchDataFromUrl = async (url: string, token: string) => {
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_BACKEND_URL + url,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data from URL:", error);
    throw error;
  }
};
export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) redirect("../auth/signin");
  const endpoints = [
    "/admin/dashboard/products",
    "/admin/dashboard/projects",
    "/admin/dashboard/subproducts",
    "/admin/dashboard/features",
    "/admin/dashboard/subscribers",
  ];

  const data = await Promise.all(
    endpoints.map((endpoint) =>
      fetchDataFromUrl(endpoint, session?.user.token!)
    )
  );

  const [products, projects, subproducts, features, subscribers] = data;
  return (
    <PageWrapper>
      <div className="container mt-6 mx-auto px-6 max-w-[1280px]">
        <h1 className="text-3xl mb-5 md:mb-14">Dashboard</h1>
        <div className="grid gap-14 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {/* Products */}
          <Card>
            <CardHeader>
              <CardTitle className="text-4xl">Products</CardTitle>
              <CardDescription>Total count of products</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between">
                <p className="text-4xl font-bold text-right">
                  {products.length}
                </p>
                <Link href={"/admin/dashboard/products"}>
                  <Button
                    size="md"
                    className="text-xl flex items-center"
                    color="default"
                    variant="faded"
                  >
                    visit
                    <ArrowRight
                      className="text-inherit"
                      strokeWidth={"2px"}
                      size={"20px"}
                    />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
          {/* Projects */}

          <Card>
            <CardHeader>
              <CardTitle className="text-4xl">Projects</CardTitle>
              <CardDescription>Total count of projects</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between">
                <p className="text-4xl font-bold text-right">
                  {projects.length}
                </p>
                <Link href={"/admin/dashboard/projects"}>
                  <Button
                    size="md"
                    className="text-xl flex items-center"
                    color="default"
                    variant="faded"
                  >
                    visit
                    <ArrowRight
                      className="text-inherit"
                      strokeWidth={"2px"}
                      size={"20px"}
                    />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
          {/* SubProducts */}
          <Card>
            <CardHeader>
              <CardTitle className="text-4xl">Subproducts</CardTitle>
              <CardDescription>Total count of subproducts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between">
                <p className="text-4xl font-bold text-right">
                  {subproducts.length}
                </p>
                <Link href={"/admin/dashboard/subproducts"}>
                  <Button
                    size="md"
                    className="text-xl flex items-center"
                    color="default"
                    variant="faded"
                  >
                    visit
                    <ArrowRight
                      className="text-inherit"
                      strokeWidth={"2px"}
                      size={"20px"}
                    />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
          {/* Requests */}

          <Card>
            <CardHeader>
              <CardTitle className="text-4xl">Requests</CardTitle>
              <CardDescription>Total count of requests</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between">
                <p className="text-4xl font-bold text-right">1</p>
                <Link href={"/admin/dashboard/requests"}>
                  <Button
                    size="md"
                    className="text-xl flex items-center"
                    color="default"
                    variant="faded"
                  >
                    visit
                    <ArrowRight
                      className="text-inherit"
                      strokeWidth={"2px"}
                      size={"20px"}
                    />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
          {/* Features */}

          <Card>
            <CardHeader>
              <CardTitle className="text-4xl">Features</CardTitle>
              <CardDescription>Total count of features</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between">
                <p className="text-4xl font-bold text-right">
                  {features.length}
                </p>
                <Link href={"/admin/dashboard/features"}>
                  <Button
                    size="md"
                    className="text-xl flex items-center"
                    color="default"
                    variant="faded"
                  >
                    visit
                    <ArrowRight
                      className="text-inherit"
                      strokeWidth={"2px"}
                      size={"20px"}
                    />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
          {/* Subscriptions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-4xl">Applications</CardTitle>
              <CardDescription>Click here to edit applications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-end">
                <Link href={"/admin/dashboard/applications"}>
                  <Button
                    size="md"
                    className="text-xl ml-auto flex items-center"
                    color="default"
                    variant="faded"
                  >
                    visit
                    <ArrowRight
                      className="text-inherit"
                      strokeWidth={"2px"}
                      size={"20px"}
                    />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
          {/* Applications */}
          <Card>
            <CardHeader>
              <CardTitle className="text-4xl">Subscriptions</CardTitle>
              <CardDescription>Total count of subscriptions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between">
                <p className="text-4xl font-bold text-right">
                  {subscribers?.length}
                </p>
                <Link href={"/admin/dashboard/subscribers"}>
                  <Button
                    size="md"
                    className="text-xl flex items-center"
                    color="default"
                    variant="faded"
                  >
                    visit
                    <ArrowRight
                      className="text-inherit"
                      strokeWidth={"2px"}
                      size={"20px"}
                    />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-4xl">Tailored Design</CardTitle>
              <CardDescription>
                Click here to edit Tailored Design page
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between">
                <Link className="ml-auto" href={"/admin/dashboard/design"}>
                  <Button
                    size="md"
                    className="text-xl flex items-center"
                    color="default"
                    variant="faded"
                  >
                    visit
                    <ArrowRight
                      className="text-inherit"
                      strokeWidth={"2px"}
                      size={"20px"}
                    />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-4xl">Specifications</CardTitle>
              <CardDescription>
                Click here to edit specifications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between">
                <Link
                  className="ml-auto"
                  href={"/admin/dashboard/specifications"}
                >
                  <Button
                    size="md"
                    className="text-xl flex items-center"
                    color="default"
                    variant="faded"
                  >
                    visit
                    <ArrowRight
                      className="text-inherit"
                      strokeWidth={"2px"}
                      size={"20px"}
                    />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageWrapper>
  );
}
