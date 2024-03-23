import { Github, Globe } from "@/app/assets/icons";
import SpeedTypeImage from "@/app/assets/images/speedtype.png";
import LoopStudio from "@/app/assets/images/loopstudio.png";

export const projects = [
  {
    imageUrl: SpeedTypeImage,
    name: "Speed Type",
    description:
      " A speed typing application that allows you practice your typing speed while being able to choose a difficulty level",
    imageAltText: "speed type app image",
    tools: [
      {
        name: "Reactjs",
        bgColor: "#00ACC1",
      },
      {
        name: "Vite",
        bgColor: "#F2B8A9",
      },
    ],
    links: [
      {
        imageAltText: "github",
        imageUrl: Github,
        link: "https://github.com/MikeyOnyedika/speed-type",
        text: "Source Code",
      },
      {
        imageAltText: "livedemo",
        imageUrl: Globe,
        link: "https://speed-type-zeta.vercel.app/",
        text: "Live Demo",
      },
    ],
    bgColor:
      "linear-gradient(98.11deg, #FBECE6 25%, #FBFCE6 25%,  rgba(250, 195, 232, 0.42) 19.91%",
  },
  {
    imageUrl: LoopStudio,
    name: "Loopstudio Landing Page",
    description: "A Landing Page from the Frontend Mentor Challenge",
    imageAltText: "loopstudio landing page",
    tools: [
      {
        name: "Reactjs",
        bgColor: "#00ACC1",
      },
      {
        name: "Vite",
        bgColor: "#F2B8A9",
      },
      {
        name: "Tailwindcss",
        bgColor: "#38BDF8",
      },
    ],
    links: [
      {
        imageAltText: "github",
        imageUrl: Github,
        link: "https://github.com/MikeyOnyedika/loopstudios-landing-page",
        text: "Source Code",
      },
      {
        imageAltText: "livedemo",
        imageUrl: Globe,
        link: "https://loopstudios-landing-page-drab-delta.vercel.app/",
        text: "Live Demo",
      },
    ],
    bgColor: "linear-gradient(98.11deg, #ED2944 5%, #EA4AE9,  #F387FF 19.91%",
  },
];
