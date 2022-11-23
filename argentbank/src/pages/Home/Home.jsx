import React from "react";
import Hero from "../../components/Hero/Hero";
import image from "./../../assets/bank-tree.jpeg"

function Home() {
  return (
    <section>
      <Hero image={image}/>
    </section>
  )
}

export default Home