import { useMemo, useState } from 'react'

const filters = [
  { value: 'all', label: 'all' },
  { value: 'movie', label: 'movies' },
  { value: 'book', label: 'books' },
]

export default function FilmDiary({ entries }) {
  const [filter, setFilter] = useState('all')
  const visibleEntries = useMemo(() => filter === 'all' ? entries : entries.filter((entry) => entry.type === filter), [entries, filter])
  const [selectedTitle, setSelectedTitle] = useState(entries[0].title)
  const selected = visibleEntries.find((entry) => entry.title === selectedTitle) || visibleEntries[0]

  function changeFilter(nextFilter) {
    const nextEntries = nextFilter === 'all' ? entries : entries.filter((entry) => entry.type === nextFilter)
    setFilter(nextFilter)
    setSelectedTitle(nextEntries[0].title)
  }

  return (
    <section className="section-shell archive-layout" aria-label="Film diary">
      <div className="film-area">
        <div className="archive-tabs" aria-label="Media type">
          {filters.map(({ value, label }) => <button key={value} type="button" className={filter === value ? 'active' : ''} onClick={() => changeFilter(value)}>{label}</button>)}
        </div>
        <div className="film-strip">
          {visibleEntries.map((entry, index) => (
            <button key={entry.title} type="button" className={`media-frame ${selected.title === entry.title ? 'selected' : ''}`} aria-label={`Open note for ${entry.title}`} onClick={() => setSelectedTitle(entry.title)}>
              <span className="media-label"><strong>{entry.shortTitle}</strong><small>{entry.type} · frame {String(index + 1).padStart(2, '0')}</small></span>
            </button>
          ))}
        </div>
        <div className="roll-caption"><span>roll 01 · sample favourites</span><span>{visibleEntries.length} {visibleEntries.length === 1 ? 'exposure' : 'exposures'}</span></div>
      </div>
      <aside className="diary-note" aria-live="polite">
        <span className="tape" aria-hidden="true"></span>
        <p className="note-date">{selected.date}</p><h2>{selected.title}</h2><p className="note-reaction">{selected.note}</p><p className="note-rating">{selected.rating}</p><p className="note-extra">{selected.extra}</p>
      </aside>
    </section>
  )
}
