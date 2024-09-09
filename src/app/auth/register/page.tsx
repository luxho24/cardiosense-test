import Carousel from "@/components/auth/general/carousel";
import { DockDemo } from "@/components/auth/general/dock";
import { Metadata } from "next";
import Link from "next/link";
import Form from "./form";

export const metadata: Metadata = {
  title: "Crear cuenta - Cardiosense",
  description: "Crea tu cuenta de CardioSense",
};

const Separator = () => (
  <div className="my-7">
    <div className="flex items-center w-full">
      <hr className="flex-grow border-t border-gray-300" />
      <span className="px-4 text-gray-300 text-sm">O registrate con</span>
      <hr className="flex-grow border-t border-gray-300" />
    </div>
    <DockDemo />
  </div>
);

export default function Login() {
  return (
    <section className="bg-black flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-2xl flex flex-col xl:flex-row shadow-lg h-auto xl:h-[90vh] w-[90vw] xl:w-[60vw]">
        <div className="w-full xl:w-1/2 hidden xl:block">
          <Carousel />
        </div>

        <div className="p-8 sm:p-12 w-full xl:w-1/2 flex flex-col justify-center">
          <h1 className="text-3xl text-gray-700 font-medium mb-4 font-montserrat">
            Crear cuenta
          </h1>
          <p className="text-[#8F8D95] mb-12 font-montserrat text-sm">
            ¿Ya tienes una cuenta?{" "}
            <Link href={"/auth/login"} className="text-[#6E54B5] font-semibold">
              Inicia sesión!
            </Link>
          </p>
          <Form />
          <Separator />
        </div>
      </div>
    </section>
  );
}
