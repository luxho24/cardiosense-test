import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/ui/sheet";
import { Input } from "@nextui-org/react";
import { BiSend } from "react-icons/bi";

export default function MenuSheets({ children }: any) {
  return (
    <Sheet>
      <SheetTrigger className="text-white">{children}</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>CardioBOT</SheetTitle>
          <SheetDescription>
            <div className="mt-5">
              <p className="text-sm text-gray-500">
                CardioBOT es un asistente virtual que te ayudará a resolver tus
                dudas y a mantenerte informado sobre tu salud.
              </p>
            </div>
            <hr className="border border-gray-500 my-4" />

            <div className="flex flex-col space-y-4 mt-4">
              {/* Mensaje del usuario */}
              <div className="flex justify-start">
                <div className="bg-gray-200 text-black rounded-lg p-2 max-w-xs">
                  <p>Hola, ¿cómo puedo mejorar mi ritmo cardíaco?</p>
                </div>
              </div>

              {/* Respuesta del bot */}
              <div className="flex justify-end">
                <div className="bg-blue-500 text-white rounded-lg p-2 max-w-xs">
                  <p>
                    Para mejorar tu ritmo cardíaco, es recomendable hacer
                    ejercicio cardiovascular regularmente, como caminar, correr
                    o nadar.
                  </p>
                </div>
              </div>

              {/* Otro mensaje del usuario */}
              <div className="flex justify-start">
                <div className="bg-gray-200 text-black rounded-lg p-2 max-w-xs">
                  <p>Gracias, ¿algún consejo para mantener mi salud?</p>
                </div>
              </div>

              {/* Respuesta del bot */}
              <div className="flex justify-end">
                <div className="bg-blue-500 text-white rounded-lg p-2 max-w-xs">
                  <p>
                    ¡Por supuesto! Mantén una dieta balanceada, realiza
                    ejercicio regularmente y consulta a tu médico de vez en
                    cuando para chequeos.
                  </p>
                </div>
              </div>
            </div>
            <hr className="border border-gray-500 my-4" />
            <Input
              type="text"
              placeholder="Escribe tu mensaje..."
              className="w-full rounded-lg p-2 mt-2 focus:outline-none"
              endContent={
                <BiSend className="text-blue-500 text-2xl cursor-pointer" />
              }
            />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
