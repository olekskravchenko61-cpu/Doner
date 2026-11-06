import Hero from '../components/Hero'
import Offers from '../components/Offers'
import MenuSection from '../components/MenuSection'
import Highlights from '../components/Highlights'
import Delivery from '../components/Delivery'
import About from '../components/About'
import Gallery from '../components/Gallery'
import Location from '../components/Location'

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <Offers />
      <MenuSection />
      <Highlights />
      <Delivery />
      <About />
      <Gallery />
      <Location />
    </main>
  )
}
