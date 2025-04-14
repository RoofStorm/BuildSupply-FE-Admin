"use client";

import * as React from "react";
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
import { TableUI } from "@/components/ui/table";
import EditProduct from "./editProduct";
// Define the schema for the product table
export const schema = z.object({
  id: z.number(),
  name: z.string(),
  sku: z.string(),
  price: z.number(),
  stock: z.number(),
  status: z.string(),
  category: z.string(),
  image: z.string().optional(),
});

export function ProductTable({
  data: initialData,
}: {
  data: z.infer<typeof schema>[];
}) {
  const [data, setData] = useState(initialData);
  const [openEditSheet, setOpenEditSheet] = useState<boolean>(false);
  const [selectedIdProduct, setSelectedIdProduct] = useState<number | null>(null);
  const handleEditProduct = (id: number) => {
    setOpenEditSheet(true);
    setSelectedIdProduct(id);
  };

  // Define the columns for the product table
  const columns: ColumnDef<z.infer<typeof schema>>[] = [
    {
      accessorKey: "name",
      header: "Tên sản phẩm",
      cell: ({ row }) => <span>{row.original.name}</span>,
      minSize: 200,
      maxSize: 400,
      size: 300,
    },
    {
      accessorKey: "image",
      header: "Hình ảnh",
      cell: ({ row }) => <span>{row.original.image}</span>,
    },
    {
      accessorKey: "sku",
      header: "Mã SKU",
      cell: ({ row }) => <span>{row.original.sku}</span>,
    },
    {
      accessorKey: "price",
      header: "Giá",
      cell: ({ row }) => <span>{row.original.price.toLocaleString()} ₫</span>,
    },
    {
      accessorKey: "stock",
      header: "Số lượng tồn",
      cell: ({ row }) => (
        <Badge
          variant={
            row.original.stock > 10
              ? "default"
              : row.original.stock > 0
              ? "secondary"
              : "destructive"
          }
        >
          {row.original.stock > 0 ? `${row.original.stock} sản phẩm` : "Hết hàng"}
        </Badge>
      ),
    },
    {
      accessorKey: "status",
      header: "Trạng thái",
      cell: ({ row }) => <span>{row.original.status}</span>,
    },
    {
      accessorKey: "category",
      header: "Danh mục",
      cell: ({ row }) => <span>{row.original.category}</span>,
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
    <div>
      <TableUI data={data} columns={columns} schema={schema} />
      <EditProduct open={openEditSheet} setOpen={setOpenEditSheet} />
    </div>
  );
}


