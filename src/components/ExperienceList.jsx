export default function ExperienceList({ experiences }) {
  return (
    <div className="experience-list">
      {experiences.map((experience) => (
        <article className="experience-row" key={`${experience.company}-${experience.year}`}>
          <div><span className="work-year">{experience.year}</span><h3>{experience.company}</h3></div>
          <p>{experience.role}</p>
          <span>{experience.location}</span>
        </article>
      ))}
    </div>
  )
}
