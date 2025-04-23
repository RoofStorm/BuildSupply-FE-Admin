"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/lib/tabs";
import OrderTab from "./OrderTab";

function Orders() {
  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Orders</h1>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="waiting">waiting</TabsTrigger>
          <TabsTrigger value="shipping">shipping</TabsTrigger>
          <TabsTrigger value="waiting">waiting</TabsTrigger>
          <TabsTrigger value="completed">completed</TabsTrigger>
          <TabsTrigger value="cancel">cancel</TabsTrigger>
        </TabsList>

        <TabsContent value="all"></TabsContent>
        <TabsContent value="waiting">waiting</TabsContent>
        <TabsContent value="shipping">shipping</TabsContent>
        <TabsContent value="completed">completed</TabsContent>
        <TabsContent value="cancel">cancel</TabsContent>
      </Tabs>
      <OrderTab />
    </div>
  );
}

export default Orders;
