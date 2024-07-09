const ContactUs = () => {
    return (
      <div className="contact-us">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <input type="text" placeholder="Name" required />
          <input type="number" placeholder="Age" required />
          <input type="email" placeholder="Email" required />
          <input type="number" placeholder="Contact Number" required />
          <textarea class="message" placeholder="Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    )
  }
  
  export default ContactUs