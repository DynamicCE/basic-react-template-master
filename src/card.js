import React from "react";
import "./index.css";
import Skills from "./components/Skills";
import "./App.css";
export default function Card() {
  return (
    <div className="card-new bg-white shadow-lg rounded-lg p-6 max-w-sm mx-auto">
      <h2>hakkımda</h2>
      <p></p>
      <h2 className="text-2xl font-bold mb-4">Becerilerim</h2>
      <Skills skill={["javascript", "react", "css"]} />
    </div>
  );
}
