import { TooltipProvider } from "@/components/ui/tooltip"
import { I18nProvider } from "@/i18n"
import { Header } from "@/components/sections/Header"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Capabilities } from "@/components/sections/Capabilities"
import { Stack } from "@/components/sections/Stack"
import { Experience } from "@/components/sections/Experience"
import { Projects } from "@/components/sections/Projects"
import { Education } from "@/components/sections/Education"
import { Contact } from "@/components/sections/Contact"

export default function App() {
  return (
    <I18nProvider>
      <TooltipProvider>
        <Header />
        <main>
          <Hero />
          <About />
          <Capabilities />
          <Stack />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </main>
      </TooltipProvider>
    </I18nProvider>
  )
}
