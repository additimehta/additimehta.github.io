import { useEffect, useRef, useState } from 'react'

export default function TravelMap({ places }) {
  const mapElement = useRef(null)
  const mapInstance = useRef(null)
  const [selected, setSelected] = useState(places[0])
  const [cardOpen, setCardOpen] = useState(true)

  useEffect(() => {
    if (!window.L || mapInstance.current) return undefined

    const map = window.L.map(mapElement.current, { zoomControl: true, minZoom: 2, worldCopyJump: true }).setView([45, -35], 3)
    window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 17, attribution: '&copy; OpenStreetMap contributors' }).addTo(map)
    const icon = window.L.divIcon({ className: '', html: '<div class="memory-marker"><span></span></div>', iconSize: [28, 28], iconAnchor: [14, 28] })

    places.forEach((place) => {
      window.L.marker(place.coordinates, { icon, title: place.name }).addTo(map).on('click', () => {
        setSelected(place)
        setCardOpen(true)
      })
    })

    mapInstance.current = map
    setTimeout(() => map.invalidateSize(), 0)
    return () => {
      map.remove()
      mapInstance.current = null
    }
  }, [places])

  return (
    <section className="map-shell">
      <div ref={mapElement} id="travel-map" aria-label="Interactive map showing places Additi has visited"></div>
      <article className={`place-card ${cardOpen ? '' : 'closed'}`} aria-live="polite">
        <button className="place-close" type="button" aria-label="Close place details" onClick={() => setCardOpen(false)}>×</button>
        <div className="photo-stack" aria-hidden="true"><div className="travel-photo photo-back"></div><div className="travel-photo photo-front"><span>your photo<br />goes here</span></div></div>
        <div className="place-copy"><p className="note-date">{selected.date}</p><h2>{selected.name}</h2><p>{selected.note}</p><span className="place-count">{selected.count}</span></div>
      </article>
      <p className="map-help">drag to move · scroll to zoom · click a red pin</p>
    </section>
  )
}
