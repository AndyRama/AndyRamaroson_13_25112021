import React from "react";
import Card from "../../components/Card/Card";
import Welcom from "./../../components/Welcom/Welcom";

function Profil() {

  return(
    <main className="main sign-in bg-dark">
    <section>
      <Welcom />
      <Card />
      <Card />
      <Card />
    </section>
    </main>
  )
}

export default Profil