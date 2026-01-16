import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <motion.h2
          className="about-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          About
        </motion.h2>

        <div className="timeline">

          {/* First Encounter */}
          <motion.div
            className="timeline-item right"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="timeline-content">
              <h3>2003 - 2020</h3>
              <h4>Before College</h4>
              <p>
              Before college, I was quite delusional and thought I wanted to pursue music. However, due to some personal setbacks during that time, I went through one of the toughest phases of my life and felt completely lost, without any real direction.
              </p>
            </div>
          </motion.div>

          {/* High School */}
          <motion.div
            className="timeline-item left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="timeline-content">
              <h3>2020 - 2025</h3>
              <h4>College & Beyond</h4>
              <p>
                In the final year of college , I started focusing on coding and have been consistently learning and growing for the past 1–2 years. Alongside this, I’m also pursuing my M.Tech, and things have started to feel clearer and more meaningful.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
