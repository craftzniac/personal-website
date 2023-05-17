import { Hero } from "./components/hero";
import { AboutMe } from "./components/aboutMe";
import { Projects } from "./components/projects";
import { Technologies } from "./components/technologies";
import { Contact } from "./components/contact/contact";

export default function Home() {
  return (
    <main className="flex flex-col gap-16 md:gap-32 lg:gap-[16rem]">
      <Hero />
      <AboutMe />
      <Projects />
      <Technologies />
      <Contact />
    </main>
  )
}
