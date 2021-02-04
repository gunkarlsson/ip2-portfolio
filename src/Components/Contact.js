import React from "react";
import styled from "styled-components";
import { animateScroll as scroll } from "react-scroll";

const ContactSection = styled.section`
  overflow: hidden;
  max-height: 100%;
  max-width: 100vw;
  display: grid;
  grid-template: 1fr 2fr 4fr / 6fr 1fr 9fr 1fr;

  .contact-title {
    grid-row: 1 / -1;
    grid-column: 1;
    background-color: var(--primary-color);
    height: 100vh;
    h1 {
      font-size: 5rem;
      line-height: 3rem;
      margin: 300px 20px 0 50px;
    }
  }

  .contact-text {
    margin-top: 100px;
    max-width: 52vw;
    grid-row: 2 / 4;
    grid-column: 3;
    padding: 50px;
    font-size: 1.2rem;

    .contact-links {
      margin-top: 10px;
    }
    a {
      margin-right: 10px;
    }

    p:last-of-type {
      margin-top: 150px;
      font-style: italic;
    }
  }

  hr {
    border: 1px solid black;
    margin-top: 50px;
    width: 100%;
  }

  button {
    margin: 50px 50px;
    grid-row: 4;
    grid-column: 1;
    outline: none;
    border: 1px solid black;
    background-color: transparent;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    cursor: pointer;
  }
  button:hover {
    transition: transform 0.4s ease;
    transform: scale(1.2);
    border: 2px solid black;
  }
`;

function Contact() {
  return (
    <ContactSection id="contact">
      <div className="contact-title">
        <h1>Contact</h1>
      </div>
      <article className="contact-text">
        <p>
          Work inquiries, love letters or random hellos can be sent to >{" "}
          <a href="hi@gunkarlsson.com">hi@gunkarlsson.com</a>
        </p>

        <hr />
        <div className="contact-links">
          <a href="https://github.com/gunkarlsson">Github</a>{" "}
          <a href="https://gunkarlsson.com/">Illustration / Animation</a>{" "}
          <a href="https://www.instagram.com/gunimation/">Instagram</a>
        </div>

        <p>
          Looking for an intern? 1st of November 2021, I'm ready to start an
          internship. If you're happen to be located in Melbourne, Australia,
          you'll be at the top of my wishlist.
        </p>
      </article>

      <button onClick={() => scroll.scrollToTop()}>
        <i class="fas fa-arrow-up"></i>
      </button>
    </ContactSection>
  );
}

export default Contact;
