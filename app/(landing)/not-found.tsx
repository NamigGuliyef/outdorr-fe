// pages/404.js
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/admin/ui/card";
import { Button } from "@nextui-org/react";
import { ArrowRight } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="container mt-24 mb-24 mx-auto px-6 max-w-[1280px]">
      <div className="grid gap-14 grid-cols-1">
        <Card>
          <CardHeader>
            <CardTitle className="text-4xl">Oops!</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl mb-8">
              The page you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link href="/" className="flex justify-end">
              <Button
                size="md"
                className="text-xl flex items-center"
                color="default"
                variant="faded">
                Go Home
                <ArrowRight
                  className="text-inherit"
                  strokeWidth={"2px"}
                  size={"20px"}
                />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NotFoundPage;
