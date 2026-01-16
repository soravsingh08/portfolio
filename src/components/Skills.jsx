import React from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiCplusplus } from "react-icons/si";

const skills = [
  { name: "React.js", level: 90, icon: <FaReact color="#61DBFB" /> },
  { name: "JavaScript", level: 90, icon: <SiJavascript color="#F7DF1E" /> },
  { name: "HTML/CSS", level: 95, icon: <FaHtml5 color="#E34F26" /> },

];

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2>Skills</h2>
        <p>Technologies I Work With.</p>

        <div className="skills-grid">
          {skills.map((s, i) => (
            <div key={i} className="skill-card">
              <div className="skill-icon">{s.icon}</div>
              <h4>{s.name}</h4>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: `${s.level}%` }}
                />
              </div>
              <span className="skill-percent">{s.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
