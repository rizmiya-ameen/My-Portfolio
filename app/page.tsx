import Intro from "@/components/Intro"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Header from "@/components/Header"
import Education from "@/components/Education"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main  className="flex flex-col items-center">
      <Header />
      <Intro />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
      
    </main>
  )
}
