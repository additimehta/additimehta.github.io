import ExperienceList from '../components/ExperienceList.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import SiteFooter from '../components/SiteFooter.jsx'
import { experiences, projects } from '../data.js'

export default function Home() {
  return (
    <section className="page home-page">
      <section className="hero section-shell">
        <p className="eyebrow">software developer · sometimes elsewhere</p>
        <h1>hey, i’m additi.</h1>
        <p className="hero-copy">I’m a Computer Science student at the University of Waterloo. I like building thoughtful products, figuring out complicated systems, and keeping a record of the things I enjoy along the way.</p>
        <div className="hero-links"><a href="#work">see my work <span aria-hidden="true">↓</span></a><a href="https://github.com/additimehta" target="_blank" rel="noreferrer">github <span aria-hidden="true">↗</span></a></div>
        <div className="hero-stamp" aria-hidden="true"><span>currently</span><strong>building</strong><span>from waterloo</span></div>
      </section>
      <section className="section-shell work-section" id="work"><SectionHeader number="01" label="experience" title="places i’ve worked" /><ExperienceList experiences={experiences} /></section>
      <section className="section-shell projects-section"><SectionHeader number="02" label="selected projects" title="things i’m making" /><div className="project-grid">{projects.map((project) => <ProjectCard key={project.title} project={project} />)}</div></section>
      <SiteFooter />
    </section>
  )
}
