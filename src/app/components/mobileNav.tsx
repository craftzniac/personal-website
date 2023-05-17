import Link from "next/link"
import Image from "next/image"
import { XMark } from "../assets/icons"
import { PhoneAndEmailContactInfo } from "./contact/phoneAndEmailContactInfo"
import { FC } from "react"


export const navIds = {
    home: "/",
    aboutMe: "about-me",
    projects: "projects",
    contact: "contact"
}


export const navItems = [
    {
        id: "home23",
        name: "Home",
        link: navIds.home
    },
    {
        id: "aboutt290",
        name: "About Me",
        link: "#" + navIds.aboutMe
    },
    {
        id: "projects28792",
        name: "Projects",
        link: "#" + navIds.projects
    },
    {
        id: "contact22891",
        name: "Contact",
        link: "#" + navIds.contact
    },
]

export const MobileNav: FC<{ closeNav: () => void, show: boolean }> = ({ closeNav, show }) => {

    return (
        <div className={`fixed ${show ? "translate-x-0" : "-translate-x-full"} top-0 transition duration-200 right-0 left-0 bottom-0 bg-primary overflow-y-auto flex flex-col items-end justify-between gap-4 p-4`}>
            <button type="button" onClick={closeNav}>
                <Image src={XMark} alt="x-mark" />
            </button>
            <ul className="flex flex-col items-stretch w-full  gap-4 justify-between">
                {
                    navItems.map(navItem => (
                        <li key={navItem.id} className="overflow-hidden flex justify-center">
                            <a href={navItem.link} className="nav-link-mobile" onClick={closeNav}>
                                <div className="fill"></div>
                                <span>
                                    {navItem.name}
                                </span>
                            </a>
                        </li>
                    ))
                }
            </ul>
            <div className="w-full flex justify-center text-center">
                <PhoneAndEmailContactInfo centerText={true} />
            </div>
        </div>
    )
}

