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
import { TableUI } from "@/components/ui/Table";
import EditAccount from "./editAccount";
// Define the schema for the product table
export const schema = z.object({
  id: z.number(),
  name: z.string(),
  sku: z.string(),
  email: z.string(),
  phone: z.string().nullable(),
  username: z.string(),
  password: z.string(),
  status: z.string(),
  role: z.string(),
  last_login_at: z.string().nullable(),
  created_at: z.string(),
  updated_at: z.string(),
});

export function AccountTable({
  data: initialData,
}: {
  data: z.infer<typeof schema>[];
}) {
  const [data, setData] = useState(initialData);
  const [openEditSheet, setOpenEditSheet] = useState<boolean>(false);
  const [selectedIdAccount, setSelectedIdAccount] = useState<number | null>(
    null
  );
  const handleEditProduct = (id: number) => {
    setOpenEditSheet(true);
    setSelectedIdAccount(id);
  };

  // Define the columns for the product table
  const columns: ColumnDef<z.infer<typeof schema>>[] = [
    {
      accessorKey: "name",
      header: "Tên tài khoản",
      cell: ({ row }) => <span>{row.original.name}</span>,
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: ({ row }) => <span>{row.original.email}</span>,
    },
    {
      accessorKey: "phone",
      header: "Số điện thoại",
      cell: ({ row }) => <span>{row.original.phone || "Không có"}</span>,
    },
    {
      accessorKey: "username",
      header: "Tên đăng nhập",
      cell: ({ row }) => <span>{row.original.username}</span>,
    },
    {
      accessorKey: "password",
      header: "Mật khẩu",
      cell: ({ row }) => <span>{row.original.password}</span>,
    },
    {
      accessorKey: "status",
      header: "Trạng thái",
      cell: ({ row }) => <span>{row.original.status}</span>,
    },
    {
      accessorKey: "role",
      header: "Vai trò",
      cell: ({ row }) => <span>{row.original.role}</span>,
    },
    {
      accessorKey: "last_login_at",
      header: "Lần đăng nhập cuối",
      cell: ({ row }) =>
        row.original.last_login_at ? (
          <span>{new Date(row.original.last_login_at).toLocaleString()}</span>
        ) : (
          <span>Chưa đăng nhập</span>
        ),
    },
    {
      accessorKey: "created_at",
      header: "Ngày tạo",
      cell: ({ row }) => (
        <span>{new Date(row.original.created_at).toLocaleDateString()}</span>
      ),
    },
    {
      accessorKey: "updated_at",
      header: "Ngày cập nhật",
      cell: ({ row }) => (
        <span>{new Date(row.original.updated_at).toLocaleDateString()}</span>
      ),
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
      <EditAccount open={openEditSheet} setOpen={setOpenEditSheet} />
    </div>
  );
}
