import React from "react";
import "./App.css"; // CSS dosyasını import ediyoruz
import catImage from "./cat.jpeg"; // Resmi import ediyoruz

function App() {
  return (
    <div className="card-container">
      {/* Ana konteyner */}
      <img src={catImage} alt="img" className="img" />
      <div className="card-content">
        {/* İçerik */}
        Bu bir kart örneğidir.
        <br />
        <button className="udemy">Udemy</button> {/* Udemy butonu */}
        <button className="youtube">YouTube</button> {/* YouTube butonu */}
      </div>
      <div className="card-footer">
        {/* Alt kısım */}
        Daha Fazla
      </div>
    </div>
  );
}

export default App;
