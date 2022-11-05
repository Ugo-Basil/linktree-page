import React, { useState } from "react";
import Footer from "../../components/footer/Footer";
import "./contact.css";
const Contact = () => {
  const name = "basil";

  const [input, setInput] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input.firstname, input.lastname, input.email, input.message);
  };
    return (
      <>
        <div className="contact-container">
          <div className="form-header">
            <h2 className="contact-heading">Contact Me</h2>
            <p className="contact-text">
              Hi there, contact me to ask me about anything you have in mind.
            </p>
          </div>
          <div className="form-container">
            <form>
              <div className="form-group">
                <div className="group-1">
                  <label htmlFor="firstname">First name</label>
                  <br />
                  <input
                    className="input"
                    type="text"
                    value={input.firstname}
                    name="firstname"
                    id="first_name"
                    placeholder="Enter your first name"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="group-2">
                  <label htmlFor="lastname">Last name</label>
                  <br />
                  <input
                    className="input"
                    type="text"
                    value={input.lastname}
                    name="lastname"
                    id="last_name"
                    placeholder="Enter your last name"
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="group-3">
                <label htmlFor="email">Email</label>
                <br />
                <input
                  className="input"
                  type="email"
                  value={input.email}
                  name="email"
                  id="email"
                  placeholder="yourname@email.com"
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="group-4">
                <label htmlFor="message">Message</label>
                <br />
                <textarea
                  className="textarea-input"
                  name="message"
                  value={input.message}
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="Send me a message and I'll reply you as soon as possible..."
                  required
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="group-5">
                <input type="checkbox" name="checkbox" id="checkbox" required />
                <label htmlFor="checkbox-msg">
                  You agree to providing your data to {name} who may contact
                  you.
                </label>
              </div>
              <div className="group-6">
                <button
                  className="btn"
                  id="btn_submit"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </>
    );
};

export default Contact;
