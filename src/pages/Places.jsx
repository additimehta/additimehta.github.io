import PageIntro from '../components/PageIntro.jsx'
import TravelMap from '../components/TravelMap.jsx'
import { places } from '../data.js'

export default function Places() {
  return (
    <section className="page places-page">
      <PageIntro eyebrow="a map of small memories" title="places i’ve been." className="places-intro">Move around the map and choose a pin to open a page from the trip.</PageIntro>
      <TravelMap places={places} />
    </section>
  )
}
