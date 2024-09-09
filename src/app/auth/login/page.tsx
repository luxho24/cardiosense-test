import Carousel from "@/components/auth/general/carousel";
import { DockDemo } from "@/components/auth/general/dock";
import { Metadata } from "next";
import Link from "next/link";
import Form from "./form";

export const metadata: Metadata = {
  title: "Inicio de sesión",
  description: "Inicia sesión en tu cuenta de CardioSense",
};

const Separator = () => (
  <div className="my-7">
    <div className="flex items-center w-full">
      <hr className="flex-grow border-t border-gray-300" />
      <span className="px-4 text-gray-300 text-sm">O inicia sesión con</span>
      <hr className="flex-grow border-t border-gray-300" />
    </div>
    <DockDemo />
  </div>
);

export default function Login() {
  return (
    <section className="flex items-center justify-center min-h-screen w-full relative">
      <video
        className="w-full h-screen absolute object-cover -z-10 opacity-85"
        autoPlay
        loop
        muted
      >
        <source src="/video/video_bg.mp4" type="video/mp4" />
      </video>
      <div className="bg-white rounded-2xl flex flex-col xl:flex-row shadow-lg h-auto xl:h-[90vh] w-[90vw] xl:w-[60vw]">
        <div className="w-full xl:w-1/2 hidden xl:block">
          <Carousel />
        </div>

        <div className="p-8 sm:p-12 w-full xl:w-1/2 flex flex-col justify-center">
          <h1 className="text-3xl text-gray-700 font-medium mb-4 font-montserrat">
            Inicia sesión
          </h1>
          <p className="text-[#8F8D95] mb-12 font-montserrat text-sm">
            ¿Aún no tienes una cuenta?{" "}
            <Link
              href={"/auth/register"}
              className="text-[#6E54B5] font-semibold"
            >
              Registrate!
            </Link>
          </p>
          <Form />
          <Separator />
        </div>
      </div>
    </section>
  );
}
