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
    </section>
  )
}

export default Home