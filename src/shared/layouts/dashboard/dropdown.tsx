import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
import { EllipsisVertical, LogOut, UserRound } from "lucide-react";
import Link from "next/link";
import LogoutButton from "./logout-btn";

export function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      {/* Trigger */}
      <DropdownMenuTrigger asChild>
        <EllipsisVertical
          size={18}
          className="cursor-pointer text-gray-500 hover:text-gray-800"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="start">
        <DropdownMenuGroup>
          {/* Account */}
          <DropdownMenuItem className="flex items-center gap-1.5 cursor-pointer p-3">
            <UserRound size={18} className="text-gray-500" />
            <Link className=" text-gray-800 text-sm" href={"/account"}>
              Account
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />

          {/* Logout */}
          <DropdownMenuItem className="flex items-center gap-1.5 cursor-pointer p-3">
            <LogOut size={18} className="text-red-400 rotate-180" />
            <LogoutButton />
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
