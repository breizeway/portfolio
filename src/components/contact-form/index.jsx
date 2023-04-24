import { useForm, ValidationError } from "@formspree/react";
import React, { useEffect } from "react";
import { Loader } from "../loader";
import "./contact-form.css";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mjvjyadj");

  useEffect(() => {
    if (!state.submitting && state.succeeded) {
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    }
  }, [state]);

  return (
    <>
      <form onSubmit={handleSubmit} className="contact-form">
        <div>
          <label htmlFor="email">your email address</label>
          <input id="email" type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div>
          <label htmlFor="message">a brief message</label>
          <textarea id="message" name="message" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        {state.errors.length !== 0 && (
          <div className="val-errors">
            {state.errors.map((error, index) => (
              <p key={index}>{error.message}</p>
            ))}
          </div>
        )}
        <div>
          <button type="submit" disabled={state.submitting}>
            send
          </button>
        </div>
        <Loader
          isLoading={state.submitting}
          loadingMessage="Sending"
          isSuccess={state.succeeded}
          successMessage="Sent!"
          className="contact-form__loading"
        />
      </form>
      <br />
    </>
  );
};

export default ContactForm;
