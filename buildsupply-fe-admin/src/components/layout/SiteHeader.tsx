import { Separator } from "@/components/lib/separator";
import { SidebarTrigger } from "@/components/lib/sidebar";
import SelectUI from "../ui/Select";
import { languageOptions } from "@/constants/general.constant";
import { useLanguageStore } from "@/store/language";


export function SiteHeader() {
  const { language, setLanguage } = useLanguageStore();

  return (
    <header className="group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex h-12 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-base font-medium">BuildSupply</h1>
      </div>
      <SelectUI value={language} onChange={setLanguage} options={languageOptions} width="w-auto" className="pr-6"/>
    </header>
  );
}
