"use client";
import * as React from "react";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/ui/drawer";
import NewMenuDrawerChart from "./menu_drawer_chart";
import { MinusIcon, PlusIcon } from "lucide-react";
import { toast } from "sonner";
import { IoFitness } from "react-icons/io5";
import { GrRevert } from "react-icons/gr";

export function NewMenuDrawer({ children }: any) {
  const [goal, setGoal] = React.useState(350);

  const date = new Date();
  const formattedDate = date.toLocaleString("es-ES", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(700, goal + adjustment)));
  }

  return (
    <Drawer>
      <DrawerTrigger>{children}</DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Actualiza tu meta diaria de actividad</DrawerTitle>
            <DrawerDescription>
              Ajusta tu meta diaria de calorías para mantener un estilo de vida
              saludable.
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">
              <button
                className="flex items-center justify-center h-8 w-8 shrink-0 rounded-full border-1 border-white"
                onClick={() => onClick(-10)}
                disabled={goal <= 200}
              >
                <MinusIcon className="h-4 w-4 text-white" />
              </button>
              <div className="flex-1 text-center">
                <div className="text-7xl font-bold tracking-tighter text-white">
                  {goal}
                </div>
                <div className="text-[0.70rem] uppercase text-muted-foreground text-gray-500">
                  Calorias por día
                </div>
              </div>
              <button
                className="flex justify-center items-center h-8 w-8 shrink-0 rounded-full border-1 border-white"
                onClick={() => onClick(10)}
                disabled={goal >= 700}
              >
                <PlusIcon className="h-4 w-4 text-white" />
              </button>
            </div>
            <div className="mt-3 h-[120px]">
              <NewMenuDrawerChart />
            </div>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <button
                className="bg-transparent py-1 rounded-lg text-sm text-white border border-gray-500"
                onClick={() =>
                  toast.success(
                    `Calorias actualizadas correctamente [${goal}]`,
                    {
                      duration: 5000,
                      description:
                        formattedDate.charAt(0).toUpperCase() +
                        formattedDate.slice(1),
                      descriptionClassName: "text-gray-500 text-xs",
                      icon: <IoFitness size={20} />,
                      action: {
                        label: <GrRevert />,
                        onClick: () => {
                          toast.success("Calorias deshechas correctamente.");
                        },
                      },
                    }
                  )
                }
              >
                Enviar
              </button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
