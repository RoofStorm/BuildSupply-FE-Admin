import { Input } from "@/components/lib/input";
import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/lib/select";
import { Button } from "@/components/lib/button";
import { z } from "zod";
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/lib/table";
import { Badge } from "@/components/lib/badge";
import SelectUI from "@/components/ui/Select";
import { orderStatusOptions } from "@/constants/order.constant";
import { InputUI } from "@/components/ui/Input";

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
interface Order {
  id: string;
  date: string;
  customer: string;
  phone: string;
  total: number;
  status: string;
}

export default function OrderTab() {
  const [selectedOrder, setSelectedOrder] = React.useState<Order | null>(null);
  const openOrderDetails = (order: Order): void => {
    if (order?.id) setSelectedOrder(order);
  };

  const closeOrderDetails = () => {
    setSelectedOrder(null);
  };
  return (
    <>
      {/* Toolbar */}
      <div className="flex justify-between items-end mb-4">
        <div className="flex items-center space-x-4 w-full">
          <InputUI
            label="Search"
            id="searchOrder"
            placeholder="Tìm kiếm đơn hàng..."
            className="grid w-full md:w-1/2 items-center gap-1.5 "
          />
          <SelectUI
            label="Trạng thái"
            options={orderStatusOptions}
            className="gap-1.5 grid"
          />
        </div>
        <Button className="bg-gray-500 text-white hover:bg-gray-700">
          Xuất báo cáo
        </Button>
      </div>

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
                        ? "pending"
                        : order.status === "Đang giao"
                        ? "default"
                        : order.status === "Hoàn thành"
                        ? "complete"
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
    </>
  );
}
