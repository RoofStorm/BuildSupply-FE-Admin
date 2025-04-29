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
import { useTranslation } from "react-i18next";
import { DeleteButton, EditButton, ViewButton } from "@/components/ui/Button";
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

  const columns: ColumnDef<z.infer<typeof schema>>[] = [
    {
      accessorKey: "name",
      header: t('categoryPage.name'),
      cell: ({ row }) => <span>{row.original.name}</span>,
    },
    {
      accessorKey: "image",
      header: t('image'),
      cell: ({ row }) => <span>{row.original.image}</span>,
      maxSize: 20,
    },
    {
      accessorKey: "slug",
      header: t('categoryPage.tag'),
      cell: ({ row }) => <span>{row.original.slug}</span>,
    },
    {
      accessorKey: "status",
      header: t('status'),
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
      header: t('description'),
      cell: ({ row }) => <span>{row.original.description}</span>,
    },
    {
      accessorKey: "created_at",
      header: t('created_at'),
      cell: ({ row }) => <span>{row.original.created_at}</span>,
    },
    {
      accessorKey: "updated_at",
      header: t('updated_at'),
      cell: ({ row }) => <span>{row.original.updated_at}</span>,
    },
    {
      id: "actions",
      header: t('action'),
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
      <EditCategory open={openEditSheet} setOpen={setOpenEditSheet} />
    </div>
  );
}
