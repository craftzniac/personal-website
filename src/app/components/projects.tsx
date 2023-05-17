import Link from "next/link"
import Minicms from "@/app/assets/images/minicms3.png"
import ProjectManagerImage from "@/app/assets/images/project-manager.png"
import SpeedTypeImage from "@/app/assets/images/speedtype.png"
import { Github } from "@/app/assets/icons/"
import { ProjectCard } from "./projectCard"
import { navIds } from "./mobileNav"

export const Projects = () => {
    const projects = [
        {
            imageUrl: Minicms,
            name: "Minicms",
            description: "A mini headless CMS built on top of mongodb, designed to be a drop-in solution for hobby/side projects. It provides a visual interface so you get to manage all collections from withing the visual editor.",
            imageAltText: "minicms project",
            tools: [
                {
                    name: "Reactjs",
                    bgColor: "#00ACC1",
                },
                {
                    name: "Expressjs",
                    bgColor: "#000000"
                },
                {
                    name: "Mongoose",
                    bgColor: "#B71C1C"
                },
                {
                    name: "Mongodb",
                    bgColor: "#10AA50"
                }
            ],
            links: [
                {
                    imageAltText: "github",
                    imageUrl: Github,
                    link: "#",
                    text: "Source Code"
                }
            ],
            bgColor: "linear-gradient(96.62deg, rgba(252, 170, 146, 0.43) 3.92%, rgba(252, 170, 146, 0.26) 32.09%, rgba(252, 170, 146, 0.65) 75.35%, rgba(252, 170, 146, 0.78) 100%)"
        }, {
            imageUrl: ProjectManagerImage,
            name: "Project Manager App",
            description: "An app I built to help me keep track of  the projects I’m working on. At it’s core, it’s really just a note taking app but one that uses kanban boards",
            imageAltText: "project manager app image",
            tools: [
                {
                    name: "Reactjs",
                    bgColor: "#00ACC1",
                },
                {
                    name: "Expressjs",
                    bgColor: "#000000"
                },
                {
                    name: "MySQL",
                    bgColor: "#166083"
                }
            ],
            links: [
                {
                    imageAltText: "github",
                    imageUrl: Github,
                    link: "#",
                    text: "Source Code"
                }
            ],
            bgColor: "linear-gradient(102.34deg, #DBC1F5 41.03%, rgba(219, 193, 245, 0.5) 56.67%, rgba(219, 193, 245, 0.6) 77.32%, rgba(219, 193, 245, 0) 101.11%, rgba(219, 193, 245, 0.33) 101.11%)"
        }, {
            imageUrl: SpeedTypeImage,
            name: "Speed Type",
            description: " A speed typing application that allows you practice your typing speed while being able to choose a difficulty level",
            imageAltText: "speed type app image",
            tools: [
                {
                    name: "Reactjs",
                    bgColor: "#00ACC1",
                },
            ],
            links: [
                {
                    imageAltText: "github",
                    imageUrl: Github,
                    link: "#",
                    text: "Source Code"
                }
            ],
            bgColor: "linear-gradient(98.11deg, #FAC3E8 13.06%, rgba(250, 195, 232, 0.42) 29.91%, rgba(250, 195, 232, 0.71) 43.95%, rgba(250, 195, 232, 0.58) 57.99%)"
        }
    ]
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
                <Link href={"https://github.com/MikeyOnyedika/"} target="_blank" className="bg-primary md:self-start rounded border-2 border-black text-black self-center px-4 py-2">
                    See More Projects
                </Link>
            </div>

        </section>
    )
}