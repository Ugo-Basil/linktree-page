import React, { useState, useEffect } from "react";
import Footer from "../../components/footer/Footer";
import "./contact.css";
const Contact = () => {
  const name = "basil";

  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setIsSubmit(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormErrors(validate(formValues));
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log("Form submitted successfully");
    }
  }, [formErrors, isSubmit]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstname) {
      errors.firstname = "First name is required";
    } else if (!values.lastname) {
      errors.lastname = "Last name is required";
    } else if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Email is invalid";
    } else if (!values.message) {
      errors.message = "Message is required";
    }

    return errors;
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
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="group-1">
                <label htmlFor="firstname">First name</label>
                <br />
                <input
                  className="input"
                  type="text"
                  value={formValues.firstname}
                  name="firstname"
                  id="first_name"
                  placeholder="Enter your first name"
                  onChange={handleChange}
                />
                <p className="errors">{formErrors.firstname}</p>
              </div>
              <div className="group-2">
                <label htmlFor="lastname">Last name</label>
                <br />
                <input
                  className="input"
                  type="text"
                  value={formValues.lastname}
                  name="lastname"
                  id="last_name"
                  placeholder="Enter your last name"
                  onChange={handleChange}
                />
                <p className="errors">{formErrors.lastname}</p>
              </div>
            </div>

            <div className="group-3">
              <label htmlFor="email">Email</label>
              <br />
              <input
                className="input"
                type="email"
                value={formValues.email}
                name="email"
                id="email"
                placeholder="yourname@email.com"
                onChange={handleChange}
              />
            </div>
            <p className="errors">{formErrors.email}</p>
            <div className="group-4">
              <label htmlFor="message">Message</label>
              <br />
              <textarea
                className="textarea-input"
                name="message"
                value={formValues.message}
                id="message"
                cols="30"
                rows="10"
                placeholder="Send me a message and I'll reply you as soon as possible..."
                onChange={handleChange}
              ></textarea>
              <p className="errors">{formErrors.message}</p>
            </div>
            <div className="group-5">
              <input type="checkbox" name="checkbox" id="checkbox" required />
              <label className="checkbox-label" htmlFor="checkbox-msg">
                You agree to providing your data to {name} who may contact you.
              </label>
            </div>
            <div className="group-6">
              <button className="btn" id="btn_submit" type="submit">
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
