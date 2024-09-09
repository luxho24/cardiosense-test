"use client";
import { useState, useEffect } from "react";
import {
  Badge,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  User,
} from "@nextui-org/react";
import { BiSearch } from "react-icons/bi";
import { GrRadialSelected } from "react-icons/gr";
import { IoWatchOutline } from "react-icons/io5";
import { NotificationIcon } from "../../../public/icons/NotificationIcon";

export default function NavbarDashboard() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex items-center justify-around p-4 bg-transparent text-white fixed top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-900 py-2 shadow-md shadow-black/30 " : "py-4"
      } w-full`}
    >
      <div className="flex items-center gap-x-12 w-full">
        {/* Logo */}
        <h1 className="text-xl font-mono">CARDIOSENSE</h1>

        {/* Two buttons */}
        <div className="flex items-center gap-x-2">
          <Button
            variant="bordered"
            color="primary"
            radius="full"
            className="p-4"
          >
            Diagnose
          </Button>
          <Button
            variant="flat"
            color="primary"
            radius="full"
            className="p-4"
            startContent={<GrRadialSelected />}
          >
            My Heart
          </Button>
        </div>
      </div>

      {/* Search bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Buscar..."
          className="bg-gray-800/50 w-[30rem] text-white rounded-full pl-6 pr-10 py-4 hover:outline-none hover:ring-2 hover:ring-gray-500 hover:transition-colors transition-colors shadow-[inset_0_2px_8px_rgba(0,0,0,0.6)]"
        />
        <div className="absolute right-0 top-0 mt-[18px] mr-5">
          <BiSearch size={20} />
        </div>
      </div>

      <div className="flex gap-x-4 items-center justify-end w-full">
        <button className="rounded-full h-12 w-12 bg-blue-500 flex items-center justify-center">
          <IoWatchOutline size={25} />
        </button>

        {/* Notifications */}
        <button className="rounded-full h-12 w-12 border-1 border-gray-500 flex items-center justify-center">
          <Badge color="danger" content={""} shape="rectangle">
            <NotificationIcon className="" size={25} />
          </Badge>
        </button>

        {/* Profile button */}
        <Dropdown className="border border-gray-500 bg-[#09090b]">
          <DropdownTrigger className="cursor-pointer">
            <User
              name="Diego Cedrón"
              description="@diegocedron7"
              avatarProps={{
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfIPFwQgaGGCj37FXKA6qkmXL7z8N7aYPLkw&s",
                style: { width: "48px", height: "48px" },
              }}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="profile">
              <Link href={"/dashboard/profile"} className="text-sm w-full">
                Perfil
              </Link>
            </DropdownItem>
            <DropdownItem key="sign_out" className="text-danger" color="danger">
              Cerrar sesión
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </nav>
  );
}
