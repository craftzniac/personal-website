import Image, { StaticImageData } from "next/image"
import { FC } from "react"

interface TechType {
    name: string,
    icon: StaticImageData
}

export const TechnologyCard: FC<{ tech: TechType }> = ({ tech }) => {
    return (
        <div className="shadow bg-primary rounded-sm flex flex-col gap-4 items-center justify-center px-2 py-3 text-base sm:text-base-sm md:text-base-md lg:text-base-lg">
            <Image src={tech.icon} alt={tech.name + " icon"} />
            <p>{tech.name}</p>
        </div>
    )
}