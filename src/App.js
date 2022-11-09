import React from 'react'
import AboutUs from './components/About Us/AboutUs'
import ShopSection from './components/About Us/Show Section/ShopSection'
import Footer from './components/Footer Section/Footer'
import HeroContainer from './components/HeroSection/HeroContainer'
import ThreeImageSection from './components/ThreeImageSection/ThreeImageSection'


const App = () => {
  return (
    <div>
      <HeroContainer />
      <ThreeImageSection />
      <AboutUs />
      <ShopSection />
      <Footer />
    </div>
  )
}

export default App