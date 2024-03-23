import Link from "next/link"
import { ProjectCard } from "./projectCard"
import { navIds } from "./mobileNav"
import { projects } from "../data"

export const Projects = () => {
    return (
        <section className="section-wrapper" id={navIds.projects}>
            <h3 className="section-title sm:text-start">
                Projects I’ve built
            </h3>

            <div className="flex flex-col gap-6 sm:gap-8 md:gap-16 w-full">
                {
                    projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))
                }
                {/* <Link href={"https://github.com/MikeyOnyedika/"} target="_blank" className="bg-primary md:self-start rounded border-2 border-black text-black self-center px-4 py-2">
                    See More Projects
                </Link> */}
            </div>

        </section>
    )
}