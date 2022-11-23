import React from "react";
import Hero from "../../components/Hero/Hero";
import image from "./../../assets/bank-tree.jpeg"
import Feature from "../../components/Feature/Feature";

// import { featureData } from '../services/data';

function Home() {
  return (
    <section>
      <Hero image={image}/>
      <Feature />
      {/* <main className="main home">
        {featureData.map((item) => (
          <Feature
            key={item.id}
            src={item.icon}
            alt={item.alt}
            title={item.title}
            paragraph={item.paragraph}
          />
        ))}
      </main> */}
    </section>
  )
}

export default Home