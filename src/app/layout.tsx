import './globals.css'
import { Footer } from './components/footer'
import { Poppins } from 'next/font/google'
import { Header } from './components/header'

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"]
})


export const metadata = {
  title: 'Victor Onyebuchi',
  description: 'personal portfolio page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.className} flex flex-col gap-16 md:gap-32 lg:gap-[16rem] items-center text-black`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
