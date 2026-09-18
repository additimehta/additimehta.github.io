function ProjectArtwork({ type }) {
  if (type === 'mahjong') return <div className="project-art" aria-hidden="true"><span>一</span><span>二</span><span>三</span></div>
  if (type === 'product') return <div className="project-art product-art" aria-hidden="true"><span>v1.0</span><span>v1.1</span><span>v2.0</span></div>
  return <div className="note-paper"><span>next:</span><p>something small,<br />useful & strange.</p></div>
}

export default function ProjectCard({ project }) {
  const content = (
    <>
      <ProjectArtwork type={project.type} />
      <div className="project-copy"><p>{project.eyebrow}</p><h3>{project.title}</h3><span>{project.detail}</span></div>
    </>
  )

  if (!project.href) return <article className="project-card project-note">{content}</article>

  return <a className={`project-card project-${project.type}`} href={project.href} target="_blank" rel="noreferrer">{content}</a>
}
