import React, { useEffect } from 'react'
import Hero from './../components/Hero/Hero'
import image from './../assets/bank-tree.jpeg'
import Feature from '../components/Feature/Feature'
import { featureData } from '../services/data'

function Home() {
  useEffect(() => {
    document.title = 'Argent Bank | Home'
  }, [])

  return (
    <main className="main home">
      <Hero image={image} />
      {featureData.map((item) => (
        <Feature
          key={item.id}
          src={item.icon}
          alt={item.alt}
          title={item.title}
          text={item.text}
        />
      ))}
    </main>
  )
}

export default Home
