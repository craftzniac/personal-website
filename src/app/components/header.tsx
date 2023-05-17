
"use client"

import {
    Hamburger,
} from "@/app/assets/icons/"
import { SocialContacts } from "./contact/socialContacts"
import Image from "next/image"
import { MobileNav } from "./mobileNav"
import { useState } from "react"
import { Nav } from "./desktopNav"

export const Header = () => {
    const [open, setOpen] = useState(false)

    return (
        <header className="shadow-sm p-4 sm:px-8 sm:py-4 flex justify-between items-center sticky top-0 bg-[white] z-10 lg:max-w-lg w-full" >
            <button type="button" onClick={() => setOpen(true)} className="md:hidden">
                <Image src={Hamburger} alt="nav icon" className="w-[24px] h-[24px]" />
            </button>
            <div className="md:hidden">
                <SocialContacts />
            </div>
            <Nav />
            <MobileNav closeNav={() => setOpen(false)} show={open} />
        </header>
    )
}
