"use client";

import { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/lib/badge";
import { z } from "zod";
import { TableUI } from "@/components/ui/Table";
import EditProduct from "./EditProduct";
import { DeleteButton, EditButton, ViewButton } from "@/components/ui/Button";
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
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
      header: t("productPage.table.name"),
      cell: ({ row }) => <span>{row.original.name}</span>,
    },
    {
      accessorKey: "image",
      header: t("productPage.table.image"),
      cell: ({ row }) => <span>{row.original.image}</span>,
    },
    {
      accessorKey: "sku",
      header: t("productPage.table.sku"),
      cell: ({ row }) => <span>{row.original.sku}</span>,
    },
    {
      accessorKey: "price",
      header: t("productPage.table.price"),
      cell: ({ row }) => <span>{row.original.price.toLocaleString()} ₫</span>,
    },
    {
      accessorKey: "stock",
      header: t("productPage.table.stock"),
      cell: ({ row }) => (
        <div className="text-center">
          <Badge
            variant={
              row.original.stock > 10
                ? "new"
                : row.original.stock > 0
                  ? "pending"
                  : "destructive"
            }
            className="text-center"
          >
            {row.original.stock > 0
              ? `${row.original.stock} sản phẩm`
              : "Hết hàng"}
          </Badge>
        </div>
      ),
    },
    {
      accessorKey: "status",
      header: t("status"),
      cell: ({ row }) => <div className="text-center">{row.original.status}</div>,
    },
    {
      accessorKey: "category",
      header: t("category"),
      cell: ({ row }) => <span>{row.original.category}</span>,
    },
    {
      id: "actions",
      header: t("actions"),
      cell: ({ row }) => (
        <div className="flex gap-2 items-center justify-center">
          <ViewButton/>
          <EditButton onClick={() => handleEditProduct(row.original.id)} />
          <DeleteButton/>
        </div>
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
