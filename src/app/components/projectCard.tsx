import Image from "next/image"
import Link from "next/link";
import { StaticImageData } from "next/image"


interface ProjectType {
    imageUrl: StaticImageData;
    name: string;
    description: string;
    imageAltText: string;
    tools: Tool[];
    links: Link[];
    bgColor: string;
}

type Tool = {
    name: string,
    bgColor?: string,
    textColor?: string
}

type Link = {
    imageAltText: string,
    imageUrl: StaticImageData,
    link: string,
    text: string
}


export const ProjectCard: React.FC<{ project: ProjectType }> = ({ project }) => {
    return (
        <div className={`shadow rounded-sm relative w-full flex p-4 lg:p-5  gap-4 sm:gap-8 lg:odd:flex-row-reverse `} style={{ background: project.bgColor }}>
            <div className="relative md:w-[350px] lg:w-full hidden md:block p-1">
                <Image src={project.imageUrl} alt={project.imageAltText} fill={true} className="object-contain " />
            </div>
            <div className="flex flex-col gap-8  text-black-75 w-full  text-left  ">
                <h5 className="text-h5 sm:text-h5-sm md:text-h5-md lg:text-h5-lg">{project.name}</h5>
                <p className="text-base sm:text-base-sm md:text-base-md lg:text-base-lg">{project.description}</p>
                <div className="flex gap-2 flex-wrap">
                    {project.tools.map(tool => (
                        <span className="rounded text-primary px-2 py-1 text-xs sm:text-xs-sm md:text-xs-md lg:text-xs-lg" style={{ backgroundColor: tool.bgColor, color: tool.textColor ?? "" }}>
                            {tool.name}
                        </span>
                    ))}
                </div>

                <div className="flex gap-3 flex-wrap items-center">
                    {
                        project.links.map(link => (
                            <Link href={link.link} target="_blank" className="flex gap-1 items-center  hover:underline text-xs sm:text-xs-sm md:text-xs-md lg:text-xs-lg font-normal">
                                <Image src={link.imageUrl} alt={link.imageAltText} className="w-5 h-5 mb-0.5 object-center" />
                                <p>{link.text}</p>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}