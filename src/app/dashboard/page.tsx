import HeartModel from "@/components/dashboard/heart/heart";
import MenuButtons from "@/components/dashboard/menu/menu_buttons";
import MenuCharts from "@/components/dashboard/menu/menu_charts";
import MenuInfo from "@/components/dashboard/menu/menu_info";
import { MenuMarquee } from "@/components/dashboard/menu/menu_marquee";

export const metadata = {
  title: "Dashboard Home - CARDIOSENSE",
  description: "Dashboard Home",
  keywords: "dashboard, home, cardiosense, health, monitoring, cardio",
  robots: "index, follow",
};

export default function DashboardHome() {
  return (
    <div className="min-h-screen grid grid-cols-12 gap-4 p-3 pt-24 bg-black">
      {/* Primera columna */}
      <div className="col-span-1  rounded-lg p-3">
        <MenuButtons />
      </div>

      {/* Segunda columna */}
      <div className="col-span-5 rounded-lg p-3">
        <h1 className="text-4xl text-white font-montserrat transform scale-y-125 mb-2">
          Condiciones
        </h1>
        <h1 className="text-4xl text-white font-montserrat transform scale-y-125">
          Generales
        </h1>

        <HeartModel />
      </div>

      {/* Tercera columna */}
      <div className="col-span-6 grid grid-rows-[2.5fr_1.5fr] ">
        {/* Parte superior */}
        <div className="grid grid-cols-3 gap-4 flex-col">
          {/* Columna de la izquierda */}
          <MenuCharts />

          {/* Columna más pequeña  */}
          <MenuInfo />
        </div>
        {/* Parte inferior*/}
        <div className="rounded-lg mt-5">
          <div className="flex items-center justify-center gap-x-5 flex-col">
            <div>
              <MenuMarquee />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
