import React from "react";
import Account from "../../components/Account/Account";
import Header from "../../components/Header/Header";

function Profil() {

  return(
    <main className="main sign-in bg-dark">
    <section>
      <Header />
      <Account />
      <Account />
      <Account />
    </section>
    </main>
  )
}

export default Profil