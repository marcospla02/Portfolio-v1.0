import React, { useEffect, useState } from "react";
import Nav from "../Nav/Nav";
import emailjs from "@emailjs/browser";
import validate from "./functions";
import { Button, Email, Message, Name, Text } from "./ContactCss";
import Swal from "sweetalert2";
const { REACT_APP_API, REACT_APP_SERVICE, REACT_APP_TEMPLATE } = process.env;

function Contact() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [disabled, setDisabled] = useState(true);

  const [error, setError] = useState({});

  const handleInput = (e) => {
    const value = e.target.value;
    setInput({ ...input, [e.target.name]: value });

    setError(validate({ ...input, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    if (
      input.name &&
      input.email &&
      input.message &&
      !error.name &&
      !error.message &&
      !error.email
    ) {
      setDisabled(false);
    }
  }, [input, error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      input.name &&
      input.email &&
      input.message &&
      !error.name &&
      !error.message &&
      !error.email
    ) {
      emailjs
        .sendForm(
          "service_3mtzokk",
          "template_poqr2sk",
          e.target,
          "jNKuofmtacmWHmdE5"
        )
        .then(() =>
          Swal.fire({
            text: "Thank you the mail was send",
            icon: "success",
            timer: 1500,
          })
        )
        .catch(() =>
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            timer: 1500,
          })
        );
    }

    setInput({ name: "", email: "", message: "" });
  };

  return (
    <div>
      <Nav />
      <form onSubmit={handleSubmit}>
        <Text>If you want put in contact with me!</Text>
        <Name>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={input.name}
            placeholder="Marcos Pla..."
            onChange={handleInput}
            className={error.name && "danger"}
          />
          {error.name && <p className="danger">{error.name}</p>}
        </Name>
        <Email>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={input.email}
            placeholder="pepe@gamil.com"
            onChange={handleInput}
            className={error.email && "danger"}
          />
          <br />
          {error.email && <p className="danger">{error.email}</p>}{" "}
        </Email>
        <Message>
          <label htmlFor="message">Message</label>
          <textarea
            type="text-area"
            name="message"
            value={input.message}
            placeholder="write your message.."
            onChange={handleInput}
            className={error.message && "danger"}
          />
          <br />
          {error.message && <p className="danger">{error.message}</p>}
        </Message>
        <Button type="sumbit" disabled={disabled}>
          Send
        </Button>
      </form>
    </div>
  );
}

export default Contact;
