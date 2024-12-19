import React from 'react'
import Hero from '../Components/Hero/Hero'
import About from '../Components/About/About'
import ContactSection from '../Components/ContactForm/ContactForm'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import ImageGrid from '../Components/ImageGrid/ImageGrid'

function Home() {
  const images = [
    { url: "/images/chickenParmesan.jpg", alt: "Image 1", caption: "Image 1" },
    { url: "/images/shrimpScampi.jpg", alt: "Image 2", caption: "Image 2" },
    { url: "/images/tomYumSoup.jpg", alt: "Image 3", caption: "Image 3" },
    { url: "/images/pasta.jpg", alt: "Image 4", caption: "Image 4" },
    { url: "/images/Ratatouille.jpg", alt: "Image 5", caption: "Image 5" },
    { url: "/images/chickenTaco.jpg", alt: "Image 6", caption: "Image 6" },
  ];
  return (
    <div>
      <Hero/>
      <About/>
      <ImageGrid images={images} />
      <ContactSection/>
      <Footer/>
    </div>
  )
}

export default Home
