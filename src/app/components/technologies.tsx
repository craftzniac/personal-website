import { TechnologyCard } from "./technologyCard"
import {
    Figma, Git, Github, HTML, CSS, JS, TS, Tailwindcss, Reactjs, Nodejs, Expressjs, Nextjs, Mongodb, Mongoosejs
} from "@/app/assets/icons"

export const Technologies = () => {
    const technologies = [
        {
            name: "Figma", icon: Figma
        },
        {
            name: "Git", icon: Git
        },
        {
            name: "Github", icon: Github
        },
        {
            name: "HTML", icon: HTML
        },
        {
            name: "CSS", icon: CSS
        },
        {
            name: "JS", icon: JS
        },
        {
            name: "TS", icon: TS
        },
        {
            name: "Tailwindcss", icon: Tailwindcss
        },
        {
            name: "Reactjs", icon: Reactjs
        },
        {
            name: "Nodejs", icon: Nodejs
        },
        {
            name: "Expressjs", icon: Expressjs
        },
        {
            name: "Nextjs", icon: Nextjs
        },
        {
            name: "Mongodb", icon: Mongodb
        },
        {
            name: "Mongoosejs", icon: Mongoosejs
        },
    ]

    return (
        <section className="section-wrapper">
            <h3 className="section-title">Technologies I work with</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-[clamp(0.5rem,10vw,3rem)] justify-center">
                {
                    technologies.map((tech, index) => (
                        <TechnologyCard key={index} tech={tech} />
                    ))
                }
            </div>
        </section>
    )
}