import Link from "next/link"
import { navIds } from "./mobileNav"

export const Hero = () => {
    return (
        <section className="flex flex-col items-center gap-8 sm:gap-16 px-4  sm:px-8 md:px-16 lg:max-w-lg">
            <div className="flex flex-col">
                <h3 className="text-h3 font-light sm:text-h3-sm md:text-h3-md lg:text-h3-lg text-accent">
                    Hey! My name is
                </h3>
                <h1 className="text-h1 sm:text-h1-sm md:text-h1-md lg:text-h1-lg text-black">
                    Victor Onyebuchi
                </h1>
                <h2 className="text-h2 sm:text-h2-sm md:text-h2-md lg:text-h2-lg text-black-75">
                    I craft digital experiences on the web
                </h2>
            </div>
            <Link href={"#" + navIds.projects} className="px-6 sm:px-8 py-4 rounded text-primary bg-accent text-base sm:text-base-sm md:text-base-md lg:text-base-lg ">See My Projects</Link>
        </section>
    )
}