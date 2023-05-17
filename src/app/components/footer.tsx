import { SocialContacts } from "./contact/socialContacts"
import Image from "next/image"
import { Heart } from "@/app/assets/icons"

export const Footer = () => {
    return (
        <section className="flex flex-col sm:flex-row-reverse sm:justify-between  items-center gap-8 p-4 sm:px-8 sm:py-4 md:py-8 w-full max-w-lg ">
            <SocialContacts center={false} />
            <span className="w-full sm:justify-start flex justify-center items-center gap-2 text-xs sm:text-xs-sm md:text-xs-md lg:text-xs-lg">
                <span>Made with</span>
                <Image src={Heart} alt="heart icon"/>
                <span>by Victor</span>
            </span>

        </section>
    )
}