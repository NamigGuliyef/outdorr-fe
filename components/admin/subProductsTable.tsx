"use client";
import { ISubProducts } from "@/types/types";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const columns = [
  {
    key: "title",
    label: "TITLE",
  },
  {
    key: "actions",
    label: "ACTIONS",
  },
];

function SubProductsTable({ subproducts }: ISubProducts) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const handleDeleteItem = (id: string) => {
    const res = axios
      .delete(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/dashboard/subproducts/${id}`,
        {
          headers: {
            Authorization: `Bearer ${session?.user.token}`,
          },
        }
      )
      .then((response) => {
        toast.success("Successfully deleted product");
        router.refresh();
      });
  };
  return (
    <Table aria-label="Example table with dynamic content">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody>
        {subproducts?.map((item, idx) => (
          <TableRow className="" key={idx}>
            <TableCell className="!text-2xl w-full">{item.title}</TableCell>
            <TableCell className="!text-xl flex gap-2 h-full">
              <Link href={`/products/subproducts/${item.slug}`}>
                <Button className="" size="md" color="primary">
                  View Live
                </Button>
              </Link>
              <Button
                className=""
                onClick={() => handleDeleteItem(item._id)}
                size="md"
                color="primary"
              >
                Delete
              </Button>
              <Link href={"./subproducts/" + item.slug}>
                <Button className="" size="md" color="primary">
                  Edit
                </Button>
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default SubProductsTable;
