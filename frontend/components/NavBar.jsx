import React from "react";
import {Menubar, MenubarMenu, MenubarTrigger,} from "@/components/ui/menubar"
import Link from "next/link";

function NavBar() {
    return(

    <Menubar className="mx-auto w-1/2 mt-2">
        <MenubarMenu>
            <MenubarTrigger>
                <Link href={"/"}>Home</Link>
            </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
            <MenubarTrigger>
                <Link href={"/tables"}>Table</Link>
            </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
            <MenubarTrigger>
                <Link href={"/forms"}>Form</Link>
            </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
            <MenubarTrigger>
                <Link href={"/items"}>Items</Link>
            </MenubarTrigger>
        </MenubarMenu>
    </Menubar>
    )
}
export default NavBar