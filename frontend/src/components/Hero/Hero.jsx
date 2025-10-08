import React from "react";
import "./Hero.css"; 

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center">
      <div className="title">
        Hi, I’m Additi 👋
      </div>

      <p className="text-xl text-gray-400 mb-6">
        I build modern, meaningful, and visually clean web experiences.
      </p>

      <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all">
        View My Work
      </button>
    </section>
  );
}
