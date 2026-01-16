import { useEffect, useState } from "react";

export default function Navbar() {

  return (
    <nav className="navbar">
  <div className="nav-inner">
    <div className="brand">Sorav <span>Singh</span></div>
    <div className="nav-links">
      <a href="#hero">Home</a>
      <a href="#about">About</a>
      <a href="#experience">Experience</a>
      <a href="#projects">Projects</a>
      <a href="#skills">Skills</a>
      <a href="#contact">Contact</a>
    </div>
  </div>
</nav>
  );
}
