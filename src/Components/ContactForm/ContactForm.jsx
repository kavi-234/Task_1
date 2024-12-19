import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section
      style={{
        backgroundColor: "#f9f9f9",
        padding: "2rem 1rem",
        borderRadius: "8px",
        margin: "2rem auto",
        maxWidth: "1200px",
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Header */}
      <div className="text-center mb-8">
        <FontAwesomeIcon
          icon={faHeadset}
          style={{ fontSize: "2.5rem", color: "#FEA116" }}
        />
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            color: "#FEA116",
            marginTop: "0.5rem",
          }}
        >
          Reach to Us
        </h2>
        <p style={{ color: "#555", fontSize: "1rem", marginTop: "0.5rem" }}>
          We'd love to hear from you! Send us a message or find us on the map.
        </p>
      </div>

      {/* Main Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          alignItems: "center",
        }}
        className="lg:flex-row lg:justify-between"
      >
        {/* Left Side - Map */}
        <div
          style={{
            flex: 1,
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
            width:"100%"
          }}
        >
          <iframe
            title="Colombo Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63317.94061427296!2d79.82692978673708!3d6.927078265675457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2594baf203cb3%3A0x61a7b1c42f681c0b!2sColombo!5e0!3m2!1sen!2slk!4v1631288884919!5m2!1sen!2slk"
            width="100%"
            height="100%"
            style={{ border: "none", minHeight: "300px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Right Side - Contact Form */}
        <div
          style={{
            flex: 1,
            maxWidth: "600px",
            padding: "2rem",
            backgroundColor: "white",
            borderRadius: "8px",
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
          }}
        >
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                  color: "#555",
                }}
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                style={{
                  marginTop: "0.5rem",
                  width: "100%",
                  padding: "0.75rem",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  fontSize: "1rem",
                }}
              />
            </div>
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                  color: "#555",
                }}
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                style={{
                  marginTop: "0.5rem",
                  width: "100%",
                  padding: "0.75rem",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  fontSize: "1rem",
                }}
              />
            </div>
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                  color: "#555",
                }}
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows="4"
                style={{
                  marginTop: "0.5rem",
                  width: "100%",
                  padding: "0.75rem",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  fontSize: "1rem",
                }}
              ></textarea>
            </div>
            <button
              type="submit"
              style={{
                backgroundColor: "#FEA116",
                color: "white",
                padding: "0.75rem",
                borderRadius: "4px",
                fontSize: "1rem",
                fontWeight: "600",
                textAlign: "center",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#e58f10")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#FEA116")}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
