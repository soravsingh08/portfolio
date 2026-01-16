import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const items = [

    {
    title: "Food Hub",
    img: "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "FoodHub, a stylish React-based food website with modern design and smooth navigation.",
    demo: "https://foodhubco.vercel.app/",
    code: "https://github.com/soravsingh08/foodhub"
  },
  {
    title: "AI Chef",
    img: "https://www.revechat.com/wp-content/uploads/2020/01/what-is-a-chatbot.webp",
    desc: "AI-powered recipe generator built with React and a recipe API.",
    demo: "  https://chefbot-hazel.vercel.app/",
    code: "https://github.com/soravsingh08/chefbot"
    //updated
  
  },

  {
    title: "PTU Survival Guide",
    img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=800&auto=format&fit=crop",
    desc: "Student resources, notes & community chat built on html, css and js",
    demo: "https://ptu-survival-guide.vercel.app/",
    code: "https://github.com/soravsingh08/PTU-Survival-Guide"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2>Projects</h2>

        <div className="projects-grid">
          {items.map((p, i) => (
            <motion.article
              key={i}
              className="project-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="project-img-wrap">
                <img src={p.img} alt={p.title} />
              </div>
              <div className="project-body">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="project-links">
                  <a href={p.demo} target="_blank" rel="noreferrer" className="btn-demo">
                    <FaExternalLinkAlt /> Demo
                  </a>
                  <a href={p.code} target="_blank" rel="noreferrer" className="btn-code">
                    <FaGithub /> Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
