import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/lib/card";
import { Input } from "@/components/lib/input";
import { Label } from "@/components/lib/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/lib/select";

function Setting() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-2xl font-bold mb-2">Setting</h1>
      <Card>
        <CardHeader>
          <CardTitle>Information Store</CardTitle>
          <CardDescription></CardDescription>
          <CardContent>
            <div className="grid gap-4 p-2">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="customerName" className="text-right">
                  Tên cửa hàng
                </Label>
                <Input
                  id="customerName"
                  placeholder="Nhập tên cửa hàng"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="customerName" className="text-right">
                  Logo
                </Label>
                <Input id="storeImg" type="file" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="customerName" className="text-right">
                  Địa chỉ
                </Label>
                <Input
                  id="address"
                  placeholder="Nhập địa chỉ cửa hàng"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="customerName" className="text-right">
                  SĐT
                </Label>
                <Input
                  id="phone"
                  placeholder="Nhập sđt"
                  className="col-span-3"
                />
              </div>
            </div>
          </CardContent>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>General Config</CardTitle>
          <CardDescription></CardDescription>
          <CardContent>
            <div className="grid gap-4 p-2">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="customerName" className="text-right">
                  Đơn vị tiền tệ
                </Label>
                <Select>
                  <SelectTrigger className="w-[280px]">
                    <SelectValue placeholder="Chọn đơn vị tiền tệ" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Đơn vị tiền tệ</SelectLabel>
                      <SelectItem value="tools">VNĐ</SelectItem>
                      <SelectItem value="electronics">USD</SelectItem>
                      <SelectItem value="furniture">Euro</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="customerName" className="text-right">
                  Ngôn ngữ
                </Label>
                <Select>
                  <SelectTrigger className="w-[280px]">
                    <SelectValue placeholder="Chọn ngôn ngữ" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Ngôn ngữ</SelectLabel>
                      <SelectItem value="vietnamese">vietnamese</SelectItem>
                      <SelectItem value="english">English</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  );
}

export default Setting;
