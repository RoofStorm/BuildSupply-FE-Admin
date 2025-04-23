"use client";

import { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
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
import EditCategory from "./EditCategory";
import { Badge } from "@/components/lib/badge";
// Define the schema for the product table
export const schema = z.object({
  id: z.number(),
  name: z.string(),
  image: z.string().optional(),
  slug: z.string(),
  parent_id: z.number().nullable(),
  description: z.string(),
  status: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
});

// Define the columns for the product table

// ProductTable component
export function CategoryTable({
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

  const columns: ColumnDef<z.infer<typeof schema>>[] = [
    {
      accessorKey: "name",
      header: "Tên sản phẩm",
      cell: ({ row }) => <span>{row.original.name}</span>,
    },
    {
      accessorKey: "image",
      header: "Hình ảnh",
      cell: ({ row }) => <span>{row.original.image}</span>,
      maxSize: 20,
    },
    {
      accessorKey: "slug",
      header: "Tag",
      cell: ({ row }) => <span>{row.original.slug}</span>,
    },
    {
      accessorKey: "status",
      header: "Trạng thái",
      cell: ({ row }) => (
        <Badge
          variant={row.original.status === "active" ? "new" : "destructive"}
        >
          {row.original.status}
        </Badge>
      ),
    },
    {
      accessorKey: "description",
      header: "Description",
      cell: ({ row }) => <span>{row.original.description}</span>,
    },
    {
      accessorKey: "created_at",
      header: "Ngày tạo",
      cell: ({ row }) => <span>{row.original.created_at}</span>,
    },
    {
      accessorKey: "updated_at",
      header: "Ngày cập nhật",
      cell: ({ row }) => <span>{row.original.updated_at}</span>,
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
              Sửa thông tin
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
    <div>
      <TableUI data={data} columns={columns} schema={schema} />
      <EditCategory open={openEditSheet} setOpen={setOpenEditSheet} />
    </div>
  );
}
