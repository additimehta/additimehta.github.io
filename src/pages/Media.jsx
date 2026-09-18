import FilmDiary from '../components/FilmDiary.jsx'
import PageIntro from '../components/PageIntro.jsx'
import { media } from '../data.js'

export default function Media() {
  return (
    <section className="page archive-page">
      <PageIntro eyebrow="a tiny media archive" title={<>things i’ve watched<br />& read.</>}>Not reviews, really. Just the bits I wanted to remember.</PageIntro>
      <FilmDiary entries={media} />
      <p className="section-shell edit-hint">Sample entries for now — we’ll replace these with your real movies and books.</p>
    </section>
  )
}
