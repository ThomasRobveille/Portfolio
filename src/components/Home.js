import React from "react";

import "../stylesheet/Homepage.css";

export default function Home() {
  return (
    <div className="containerHome">
      <div className="title">
        <h1>THOMAS ROBVEILLE</h1>
        <h2>Développeur Front-End</h2>
      </div>
      <div>
        <div className="fleche_bas"></div>
        <div className="action_card_container">
          <div className="action_card">Profil</div>
          <div className="action_card">Github</div>
          <div className="action_card">Contact</div>
        </div>
      </div>
    </div>
  )
}