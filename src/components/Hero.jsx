import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profileImg from "../assets/RAHUL.jpg"; 

export default function Hero() {
  return (
    <section id="hero" className="section hero">
      <div className="container hero-inner">
        
        {/* Left Side - Profile Image */}
        <motion.img
          src={profileImg}
          alt="Profile"
          className="hero-img"
          initial={{ opacity: 0, scale: 0.9, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        />

        {/* Right Side - Text Content */}
        <div className="hero-content">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Hi, I’m <span className="highlight">Sorav Singh</span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Full Stack Developer | React Enthusiast
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <a href="mailto:you@example.com" className="btn btn-primary">Get in Touch</a>
            <a href="/resume.pdf" className="btn btn-outline" download>Resume</a>
          </motion.div>

          <motion.div
            className="hero-socials"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <a href="https://github.com/soravsingh08" target="_blank" rel="noreferrer"><FaGithub/></a>
            <a href="www.linkedin.com/in/sorav-singh-5038bb384" target="_blank" rel="noreferrer"><FaLinkedin/></a>
            <a href="mailto:soravsingh2024@gmail.com"><FaEnvelope/></a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
