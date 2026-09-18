import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import Media from './pages/Media.jsx'
import Places from './pages/Places.jsx'

const pages = { home: Home, watch: Media, places: Places }

function pageFromHash() {
  const requested = window.location.hash.slice(1) || 'home'
  return pages[requested] ? requested : 'home'
}

export default function App() {
  const [page, setPage] = useState(pageFromHash)
  const CurrentPage = pages[page]

  useEffect(() => {
    const updatePage = () => {
      setPage(pageFromHash())
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
    window.addEventListener('hashchange', updatePage)
    return () => window.removeEventListener('hashchange', updatePage)
  }, [])

  return (
    <>
      <Header currentPage={page} />
      <main><CurrentPage /></main>
    </>
  )
}
