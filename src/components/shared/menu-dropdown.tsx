import { Menu } from "lucide-react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "../ui/menubar";
import { TopBarHeight } from "./top-bar";

export default function MenuDropdown() {
  return (
    <div
      style={{
        ...({ "-webkit-app-region": "no-drag" } as React.CSSProperties),
      }}
    >
      <Menubar
        className={`bg-transparent border-0 focus:bg-transparent flex items-center justify-center`}
        style={{
          height: `${TopBarHeight}px`,
        }}
      >
        <MenubarMenu>
          <MenubarTrigger
            asChild
            className="bg-transparent focus:bg-transparent focus:text-white duration-200 hover:bg-white/10 data-[state=open]:bg-white/10 data-[state=open]:text-white aspect-square h-fit flex justify-between items-center text-white w-[90%]"
          >
            <Menu size={24} />
          </MenubarTrigger>
          <MenubarContent
            align="start"
            sideOffset={10}
            alignOffset={0}
            className="w-fit"
          >
            <MenubarItem onSelect={() => console.log("Profile clicked")}>
              Profile
            </MenubarItem>
            <MenubarItem onSelect={() => console.log("Settings clicked")}>
              Settings
            </MenubarItem>
            <MenubarSub>
              <MenubarSubTrigger>Share</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Email link</MenubarItem>
                <MenubarItem>Messages</MenubarItem>
                <MenubarItem>Notes</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarItem onSelect={() => console.log("Help clicked")}>
              Help
            </MenubarItem>
            <MenubarItem
              onSelect={() => console.log("Logout clicked")}
              className="text-red-600"
            >
              Logout
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}
