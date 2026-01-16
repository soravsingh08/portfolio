import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <p>Let's discuss opportunities</p>

        <div className="contact-grid">
          {/* Left Side - Info */}
          <div className="contact-info">
            <div className="info-item">
              <FaEnvelope className="icon" />
              <div>
                <h4>Email</h4>
                <p>soravsingh2024@gmail.com</p>
              </div>
            </div>

            <div className="info-item">
              <FaPhone className="icon" />
              <div>
                <h4>Phone</h4>
                <p>7006619883</p>
              </div>
            </div>

            <div className="info-item">
              <FaMapMarkerAlt className="icon" />
              <div>
                <h4>Location</h4>
                <p>Chandigarh, India</p>
              </div>
            </div>

            <div className="info-item">
              <FaLinkedin className="icon" />
              <div>
                <h4>LinkedIn</h4>
                <p>linkedin.com/in/yourprofile</p>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
