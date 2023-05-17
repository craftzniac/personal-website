import {
    Github, LinkedIn, Twitter
} from "@/app/assets/icons/"
import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

export const SocialContacts: FC<{ center?: boolean }> = ({ center=true }) => {
    const socialContacts = [
        {
            id: "github23",
            name: "github link",
            icon: Github,
            link: "https://github.com/MikeyOnyedika",
            alt: "github icon"
        }, {
            id: "linkedin223",
            name: "linkedin profile link",
            icon: LinkedIn,
            link: "https://www.linkedin.com/in/victor-onyebuchi-060a77243/",
            alt: "linkedin icon"
        }, {
            id: "twitttt",
            name: "twitter handle link",
            icon: Twitter,
            link: "https://twitter.com/Mikey24820494",
            alt: "twitter icon"
        }
    ]
    return (
        <div className={`flex gap-4 w-full ${center === true ? "justify-center": "justify-end"}`}>
            {
                socialContacts.map(social => (
                    <Link href={social.link} target="_blank" className=" flex justify-center items-center w-fit">
                        <Image key={social.id} src={social.icon} alt={social.alt} className="w-[1.5rem] min-w-[1.5rem]" />
                    </Link>
                ))
            }
        </div>
    )
}