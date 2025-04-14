"use client";

import * as React from "react";
import { Badge } from "@/components/lib/badge";
import { Button } from "@/components/lib/button";
import { Input } from "@/components/lib/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/lib/table";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/lib/select";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/lib/sheet";
import { z } from "zod";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/lib/tabs";

export const schema = z.object({
  id: z.string(),
  date: z.string(),
  customer: z.string(),
  phone: z.string(),
  total: z.number(),
  status: z.string(),
});

// Mock data for orders
const orders = [
  {
    id: "ORD-00123",
    date: "09/04/2025",
    customer: "Nguyễn Văn B",
    phone: "0909123456",
    total: 1500000,
    status: "Chờ xử lý",
  },
  {
    id: "ORD-00124",
    date: "10/04/2025",
    customer: "Trần Thị C",
    phone: "0912345678",
    total: 2000000,
    status: "Đang giao",
  },
  {
    id: "ORD-00125",
    date: "11/04/2025",
    customer: "Lê Văn D",
    phone: "0923456789",
    total: 500000,
    status: "Hoàn thành",
  },
  {
    id: "ORD-00126",
    date: "12/04/2025",
    customer: "Phạm Thị E",
    phone: "0934567890",
    total: 1000000,
    status: "Đã hủy",
  },
];

function Orders() {
  const [selectedOrder, setSelectedOrder] = React.useState<Order | null>(null);

  interface Order {
    id: string;
    date: string;
    customer: string;
    phone: string;
    total: number;
    status: string;
  }

  const openOrderDetails = (order: Order): void => {
    if (order?.id) setSelectedOrder(order);
  };

  const closeOrderDetails = () => {
    setSelectedOrder(null);
  };

  return (
    <div className="p-6">
      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="waiting">waiting</TabsTrigger>
          <TabsTrigger value="shipping">shipping</TabsTrigger>
          <TabsTrigger value="waiting">waiting</TabsTrigger>
          <TabsTrigger value="completed">completed</TabsTrigger>
          <TabsTrigger value="cancel">cancel</TabsTrigger>
        </TabsList>
        {/* Toolbar */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-4">
          <Input placeholder="Tìm kiếm đơn hàng..." className="w-64" />
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Chọn Trạng thái" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Trạng thái</SelectLabel>
                <SelectItem value="all">Tất cả</SelectItem>
                <SelectItem value="waiting">Chờ xử lý</SelectItem>
                <SelectItem value="shipping">Đang giao</SelectItem>
                <SelectItem value="completed">Hoàn thành</SelectItem>
                <SelectItem value="cancel">Đã hủy</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <Button className="bg-gray-500 text-white hover:bg-gray-700">
          Xuất báo cáo
        </Button>
      </div>
        <TabsContent value="all">
      
        </TabsContent>
        <TabsContent value="waiting">waiting</TabsContent>
        <TabsContent value="shipping">shipping</TabsContent>
        <TabsContent value="completed">completed</TabsContent>
        <TabsContent value="cancel">cancel</TabsContent>
      </Tabs>

      

      {/* Order List Table */}
      <div className="overflow-hidden rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Mã đơn hàng</TableHead>
              <TableHead>Ngày đặt</TableHead>
              <TableHead>Khách hàng</TableHead>
              <TableHead>Số điện thoại</TableHead>
              <TableHead>Tổng tiền</TableHead>
              <TableHead>Trạng thái</TableHead>
              <TableHead>Hành động</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>
                  <a href="#" className="text-blue-500 hover:underline">
                    {order.id}
                  </a>
                </TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.phone}</TableCell>
                <TableCell>{order.total.toLocaleString()} VNĐ</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      order.status === "Chờ xử lý"
                        ? "default"
                        : order.status === "Đang giao"
                        ? "destructive"
                        : order.status === "Hoàn thành"
                        ? "secondary"
                        : "destructive"
                    }
                  >
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => openOrderDetails(order)}
                      >
                        Xem chi tiết
                      </Button>
                    </SheetTrigger>
                    <SheetContent className="w-[600px]">
                      <SheetHeader>
                        <SheetTitle>Chi tiết đơn hàng</SheetTitle>
                        <SheetDescription>
                          Thông tin chi tiết về đơn hàng.
                        </SheetDescription>
                      </SheetHeader>
                      {selectedOrder && (
                        <div className="grid gap-4 py-4">
                          <p>
                            <strong>Mã đơn hàng:</strong> {selectedOrder.id}
                          </p>
                          <p>
                            <strong>Ngày đặt:</strong> {selectedOrder.date}
                          </p>
                          <p>
                            <strong>Khách hàng:</strong>{" "}
                            {selectedOrder.customer}
                          </p>
                          <p>
                            <strong>Số điện thoại:</strong>{" "}
                            {selectedOrder.phone}
                          </p>
                          <p>
                            <strong>Tổng tiền:</strong>{" "}
                            {selectedOrder.total.toLocaleString()} VNĐ
                          </p>
                          <p>
                            <strong>Trạng thái:</strong> {selectedOrder.status}
                          </p>
                        </div>
                      )}
                      <SheetFooter>
                        <SheetClose asChild>
                          <Button variant="outline">Đóng</Button>
                        </SheetClose>
                      </SheetFooter>
                    </SheetContent>
                  </Sheet>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <span>Đang xem 1-4 trong 4 đơn hàng</span>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <ChevronLeftIcon />
          </Button>
          <Button variant="outline" size="sm">
            <ChevronRightIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Orders;
