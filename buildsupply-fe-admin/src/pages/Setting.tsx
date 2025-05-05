import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/lib/card";
import { InputUI } from "@/components/ui/Input";

import SelectUI from "@/components/ui/Select";
import { currencyUnitOptions, languageOptions } from "@/constants/general.constant";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';


function Setting() {
  const { t, i18n } = useTranslation();
  const [lng, setLng] = useState('vi')

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  useEffect(()=>{
    if(lng){
      changeLanguage(lng);
    }
  },[lng])

  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-2xl font-bold mb-2">Setting</h1>
      <Card>
        <CardHeader>
          <CardTitle>Information Store</CardTitle>
          <CardDescription></CardDescription>
          <CardContent>
            <div className="grid gap-4 p-2">
              <InputUI label="Tên cửa hàng" placeholder="Nhập tên cửa hàng" id="customerName" inputClassName="col-span-3" className="grid grid-cols-4 items-center gap-4" />
              <InputUI label="Logo" type="file" id="storeImg" inputClassName="col-span-3" className="grid grid-cols-4 items-center gap-4" />
              <InputUI label="Địa chỉ" placeholder="Nhập địa chỉ cửa hàng" id="address" inputClassName="col-span-3" className="grid grid-cols-4 items-center gap-4" />
              <InputUI label="SĐT" placeholder="Nhập sđt" id="phone" inputClassName="col-span-3" className="grid grid-cols-4 items-center gap-4" />
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
              <SelectUI label="Đơn vị tiền tệ" options={currencyUnitOptions} className="grid grid-cols-4 items-center gap-4" />
              <SelectUI label="Ngôn ngữ" options={languageOptions} value={lng} onChange={setLng} className="grid grid-cols-4 items-center gap-4" />
              <h1>{t('welcome')}</h1>
            </div>
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  );
}

export default Setting;
