import { Contact } from './components/Contact'
import { EducationSection } from './components/EducationSection'
import { ExperienceSection } from './components/ExperienceSection'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Languages } from './components/Languages'
import { SkillsSection } from './components/SkillsSection'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
        <Languages />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
