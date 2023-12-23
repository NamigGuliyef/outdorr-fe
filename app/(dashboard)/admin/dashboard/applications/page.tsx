import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { PageWrapper } from "@/components/PageWrapper";
import ApplicationsTable from "@/components/admin/applicationsTable";
import NeedsTable from "@/components/admin/needsTable";
import { Button } from "@nextui-org/react";
import axios from "axios";
import { getServerSession } from "next-auth";
import Link from "next/link";
const fetchApplications = async (token: any) => {
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_BACKEND_URL + "/admin/dashboard/applications",
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    return { results: response.data };
  } catch (error) {
    console.error("Error fetching applications:", error);
    throw error;
  }
};
export default async function page() {
  const session = await getServerSession(authOptions);
  const { results: applications } = await fetchApplications(
    session?.user.token
  );
  return (
    <PageWrapper>
      <div className="container mt-6 mx-auto px-6 max-w-[1280px]">
        <h1 className="text-5xl mb-4">Applications data</h1>
        <Button
          as={Link}
          href="/admin/dashboard/applications/new"
          className="mb-4"
          color="primary"
          size="lg"
        >
          New
        </Button>
        <ApplicationsTable applications={applications} />
      </div>
    </PageWrapper>
  );
}
