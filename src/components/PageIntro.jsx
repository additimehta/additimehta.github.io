export default function PageIntro({ eyebrow, title, children, className = '' }) {
  return (
    <div className={`section-shell page-intro ${className}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{children}</p>
    </div>
  )
}
