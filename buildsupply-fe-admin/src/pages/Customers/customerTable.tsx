"use client";

import { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/lib/badge";
import { Button } from "@/components/lib/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/lib/dropdown-menu";
import { MoreVerticalIcon } from "lucide-react";
import { z } from "zod";
import { TableUI } from "@/components/ui/Table";
import EditCustomer from "./EditCustomer";

// Define the schema for the product table
export const schema = z.object({
  id: z.number(),
  name: z.string(),
  phone: z.string(),
  email: z.string(),
  address: z.string(),
  orders: z.number(),
  totalSpent: z.number(),
  status: z.string(),
});

// CustomerTable component
export function CustomerTable({
  data: initialData,
}: {
  data: z.infer<typeof schema>[];
}) {
  const [data, setData] = useState(initialData);
  const [openEditSheet, setOpenEditSheet] = useState<boolean>(false);

  const [selectedIdProduct, setSelectedIdProduct] = useState<number | null>(
    null
  );
  const handleEditProduct = (id: number) => {
    setOpenEditSheet(true);
    setSelectedIdProduct(id);
  };
  // Define the columns for the product table
  const columns: ColumnDef<z.infer<typeof schema>>[] = [
    {
      accessorKey: "name",
      header: "Tên khách hàng",
      cell: ({ row }) => <span>{row.original.name}</span>,
      minSize: 200,
      maxSize: 400,
      size: 300,
    },
    {
      accessorKey: "phone",
      header: "Phone",
      cell: ({ row }) => <span>{row.original.phone}</span>,
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: ({ row }) => <span>{row.original.phone}</span>,
    },
    {
      accessorKey: "totalSpent",
      header: "Amount",
      cell: ({ row }) => (
        <span>{row.original.totalSpent.toLocaleString()} ₫</span>
      ),
    },
    {
      accessorKey: "status",
      header: "Trạng thái",
      cell: ({ row }) => (
        <Badge
          variant={
            row.original.status === "Hoạt động"
              ? "new"
              : row.original.status === "Đã khóa"
              ? "destructive"
              : "pending"
          }
        >
          {row.original.status}
        </Badge>
      ),
    },
    {
      accessorKey: "address",
      header: "Địa chỉ",
      cell: ({ row }) => <span>{row.original.address}</span>,
    },
    {
      accessorKey: "orders",
      header: "Đơn hàng",
      cell: ({ row }) => <span>{row.original.orders}</span>,
    },
    {
      id: "actions",
      header: "Hành động",
      cell: ({ row }) => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreVerticalIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={() => handleEditProduct(row.original.id)}
            >
              Sửa
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => console.log("Delete", row.original.id)}
            >
              Xóa
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ];

  return (
    <div className="overflow-hidden rounded-lg border">
      <TableUI data={data} columns={columns} schema={schema} />
      <EditCustomer open={openEditSheet} setOpen={setOpenEditSheet} />
    </div>
  );
}
