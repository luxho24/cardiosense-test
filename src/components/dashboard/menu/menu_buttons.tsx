import { Tooltip } from "@nextui-org/react";
import React from "react";
import { IoWatchOutline } from "react-icons/io5";
import { RxAvatar, RxCalendar, RxCamera, RxDashboard } from "react-icons/rx";
import MenuSheets from "./menu_sheets";
import { NewMenuDrawer } from "./menu_drawer";
import { SiChatbot } from "react-icons/si";

const MenuContainer = ({
  children,
  active = false,
}: {
  children: React.ReactNode;
  active?: boolean;
}) => {
  return (
    <div
      className={`rounded-full h-14 w-14 border-1 border-gray-500 ${
        active ? "bg-gray-100/30" : ""
      } hover:bg-gray-100/50 transition-colors flex items-center justify-center text-gray-300 focus:outline-none`}
    >
      {children}
    </div>
  );
};

export default function MenuButtons() {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-y-4">
      {/* Drawer */}
      <NewMenuDrawer>
        <Tooltip content="Calorias diarias" placement="right-end">
          <MenuContainer>
            <IoWatchOutline size={20} />
          </MenuContainer>
        </Tooltip>
      </NewMenuDrawer>

      {/* Sheets */}
      <MenuSheets>
        <Tooltip content="Cardiobot" placement="right-end">
          <MenuContainer>
            <SiChatbot size={20} />
          </MenuContainer>
        </Tooltip>
      </MenuSheets>

      {/* Por definir */}
      <Tooltip content="I am a tooltip" placement="right-end">
        <MenuContainer active>
          <RxCalendar size={20} />
        </MenuContainer>
      </Tooltip>

      {/* Por definir */}
      <Tooltip content="I am a tooltip" placement="right-end">
        <MenuContainer>
          <RxAvatar size={20} />
        </MenuContainer>
      </Tooltip>

      {/* Por definir */}
      <Tooltip content="I am a tooltip" placement="right-end">
        <MenuContainer>
          <RxCamera size={20} />
        </MenuContainer>
      </Tooltip>
    </div>
  );
}
