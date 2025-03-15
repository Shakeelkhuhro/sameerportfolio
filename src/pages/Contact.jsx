import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact-section">
      <div className="contact-content">
        <h2>📩 Get in Touch</h2>
        <p>🚀 Looking for a <b>skilled developer</b>? I'm open for freelance projects & collaborations.</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>

        <div className="contact-links">
          <a href="mailto:sameerkhuhro56@outlook.com" className="contact-link">📩 Email</a>
          <a href="https://linkedin.com/in/sameerkhuhro" target="_blank" rel="noopener noreferrer" className="contact-link">🔗 LinkedIn</a>
          <a href="https://www.upwork.com/freelancers/~0140aae850a43a3d60" target="_blank" rel="noopener noreferrer" className="contact-link">💼 Hire Me on Upwork</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
