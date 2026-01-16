import React from "react";
import { motion } from "framer-motion";

const timeline = [

  {
    title: "B.Tech (CSE)",
    org: "Ram Devi Jindal Group Of Professional Institute",
    time: "2020 — 2024",
    desc: "Graduated with strong foundation in DSA & web dev."
  },
  {
    title: "Full-Stack Intern",
    org: "Deftsoft",
    time: "Jan 2024 — Jul 2024",
    desc: "Built features across React frontend and Node APIs."
  },
  {
    title: "M.Tech (CSE)",
    org: "Swami Vivekanand Institute Of Engineering And Technology",
    time: "2024 — 2026",
    desc: "Pursuing Master's degree with focus on AI & advanced systems."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2 style={{ marginBottom: "3rem" }}>Experience & Education</h2>

        <div className="expereince">
          {timeline.map((t, i) => (
            <motion.div
              key={i}
              className="experience-item"
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <div className="dot" />
              <div className="content">
                <h3>
                  {t.title} <span>@ {t.org}</span>
                </h3>
                <small>{t.time}</small>
                <p>{t.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
