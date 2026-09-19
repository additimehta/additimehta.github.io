import { useState } from 'react'
import { navLinks } from '../data.js'

export default function Header({ currentPage, setPage }) {
  const [open, setOpen] = useState(false)

  function changePage(page) {
    setPage(page)
    setOpen(false)
    window.scrollTo(0, 0)
  }

  return (
    <header className="site-header">
      <a
        className="logo"
        href="#home"
        aria-label="Additi home"
        onClick={(event) => {
          event.preventDefault()
          changePage('home')
        }}
      >
        addi.
      </a>

      <button
        className="menu-button"
        type="button"
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={() => setOpen(!open)}
      >
        menu
      </button>

      <nav id="site-nav" className={open ? 'open' : ''} aria-label="Main navigation">
        {navLinks.map(({ page, label }) => (
          <a
            key={page}
            href={`#${page}`}
            className={currentPage === page ? 'active' : ''}
            onClick={(event) => {
              event.preventDefault()
              changePage(page)
            }}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  )
}
