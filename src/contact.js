// src/contact.js
export default function loadContact() {
    const content = document.getElementById("content");
    content.innerHTML = ""; // Clear previous content

    const contactDiv = document.createElement("section");
    contactDiv.classList.add("contact");
    contactDiv.innerHTML = `
      <h2>Contact Us</h2>
      <div class="contact-details">
        <div class="contact-item">
          <h3>Phone</h3>
          <p>(123) 456-7890</p>
        </div>
        <div class="contact-item">
          <h3>Email</h3>
          <p>info@restaurant.com</p>
        </div>
        <div class="contact-item">
          <h3>Address</h3>
          <p>123 Main Street, City, State, ZIP</p>
        </div>
      </div>
      <form class="contact-form">
        <input type="text" placeholder="Your Name" required>
        <input type="email" placeholder="Your Email" required>
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    `;
    content.appendChild(contactDiv);
  }
