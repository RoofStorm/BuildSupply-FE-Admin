"use client";

import * as React from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Badge } from "@/components/lib/badge";
import { Button } from "@/components/lib/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/lib/table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/lib/dropdown-menu";
import { MoreVerticalIcon } from "lucide-react";
import { z } from "zod";

// Define the schema for the product table
export const schema = z.object({
  id: z.number(),
  name: z.string(),
  sku: z.string(),
  price: z.number(),
  stock: z.number(),
  status: z.string(),
  category: z.string(),
});

// Define the columns for the product table
const columns: ColumnDef<z.infer<typeof schema>>[] = [
  {
    accessorKey: "name",
    header: "Tên sản phẩm",
    cell: ({ row }) => <span>{row.original.name}</span>,
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
      <Badge variant={row.original.stock > 10 ? "default" : row.original.stock > 0 ? "secondary" : "destructive"}>
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
          <DropdownMenuItem onClick={() => console.log("Edit", row.original.id)}>Sửa</DropdownMenuItem>
          <DropdownMenuItem onClick={() => console.log("Delete", row.original.id)}>Xóa</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];

// ProductTable component
export function ProductTable({
  data: initialData,
}: {
  data: z.infer<typeof schema>[];
}) {
  const [data, setData] = React.useState(initialData);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-4">
      <div className="overflow-hidden rounded-lg border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="text-center">
                  Không có sản phẩm nào.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}