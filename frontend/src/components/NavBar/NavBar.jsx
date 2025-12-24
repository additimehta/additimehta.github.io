import React from "react";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <ul className="nav-links">
        <li>
          <a href="/">About Me</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/experience">Experience</a>
        </li>
        <li>
            <a href="/hobbies">Hobbies</a>
        </li>
      </ul>
    </nav>
  );
}
