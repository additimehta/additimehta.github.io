import { useState } from 'react'
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import Media from './pages/Media.jsx'
import Places from './pages/Places.jsx'

export default function App() {
  const [page, setPage] = useState('home')

  return (
    <>
      <Header currentPage={page} setPage={setPage} />

      <main>
        {page === 'home' && <Home />}
        {page === 'watch' && <Media />}
        {page === 'places' && <Places />}
      </main>
    </>
  )
}
