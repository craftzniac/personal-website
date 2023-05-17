import { navIds } from "./mobileNav"
export const AboutMe = () => {
    const parts = [
        "Hello, my name is victor onyebuchi and I’m your friendly neighborhood web developer. My interest in programming began towards the end of 2019, when I started writing arduino code to blink LEDs.",

        "Then, I learnt Java/Android and built a basic quiz app which almost everyone in my class used to prepare for one of our class tests. Then I spent the next few months hopping from one technology to another.",

        "Finally, In 2021, I ventured into the wonderful world of web development, learning the basics and eventually moving over to the MERN stack and Nextjs. I continuously look for avenues to learn new tech and improve my existing knowledge."
    ]
    return (
        <section className="section-wrapper" id={navIds.aboutMe}>
            <h3 className="section-title">
                A little Info About Me
            </h3>
            <div className="text-black-75 flex flex-col gap-4 md:gap-8  text-base sm:text-base-sm md:text-base-md lg:text-base-lg">
                {
                    parts.map(part => (
                        <p>{part}</p>
                    ))
                }
            </div>
        </section>
    )
}