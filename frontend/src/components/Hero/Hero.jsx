import React, { useEffect, useState } from "react";
import "./Hero.css";

export default function Hero() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newScale = 1 + Math.min(scrollY / 600, 0.6);
      setScale(newScale);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <h1
          className="hero-text"
          style={{ transform: `scale(${scale})` }}
        >
          Hi, my name is Additi
        </h1>

        <h2 className="hero-subtext">
          I am an aspiring Software Engineer and I like to build things
        </h2>


        <div className="hero-projects-link" >

        <h2 className="hero-projects-text">
          Here are some things I have been working on
        </h2>

        <a href="/projects" className="hero-button">
          View Projects →
        </a>

        </div>
      </div>
    </section>
  );
}
