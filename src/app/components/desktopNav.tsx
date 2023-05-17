import { PhoneAndEmailContactInfo } from "./contact/phoneAndEmailContactInfo"
import { SocialContacts } from "./contact/socialContacts"
import { navItems } from "./mobileNav"
import Link from "next/link"

export const Nav = () => {
    return (
        <div className="hidden md:flex gap-4 items-center w-full">
            <ul className="flex gap-4 items-center w-full">
                {
                    navItems.map(navItem => (
                        <li key={navItem.id} className="overflow-hidden flex justify-center">
                            <a href={navItem.link} className="nav-link">
                                <div className="half-fill"></div>
                                <span className="text-xs-md font-normal">
                                    {navItem.name}
                                </span>
                            </a>
                        </li>
                    ))
                }
            </ul>
            <div className="flex w-full justify-end gap-8">
                <PhoneAndEmailContactInfo flexRow={true} />
                <div className="w-[0.25rem] bg-black-25"></div>
                <SocialContacts />
            </div>
        </div>
    )
}