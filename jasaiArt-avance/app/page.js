import Navbar from './navbar'
import Footer from './footer'
import Landing from './LandingPage'
import RegalaArte from './RegalaArte'
import FiltrarPorPrecio from './FiltrarPorPrecio'
import Precios from './Precios'
import Tecnica from './Tecnica'
import Destacadas from './Destacadas'

export default function Home() {
  return (

    <div>
      <Navbar />
      <Landing />
      <RegalaArte/>
      <FiltrarPorPrecio/>
      <Precios/>
      <Tecnica/>
      <Destacadas/>
      <Footer />
    </div>

  )
}
