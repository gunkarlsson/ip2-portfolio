import React from "react";
import styled from "styled-components";
import { animateScroll as scroll } from "react-scroll";

const ContactSection = styled.section`
  height: 100vh;
  display: grid;
  grid-template: 1fr 6fr 1fr / 5fr 1fr 9fr 1fr;

  h1 {
    font-size: 5rem;
    line-height: 3rem;
    margin: 250px 10px 0 80px;
  }

  .contact-title {
    grid-row: 1 / -1;
    grid-column: 1;
    background-color: var(--primary-color);
  }

  .contact-text {
    margin-top: 90px;
    max-width: 52vw;
    grid-row: 2;
    grid-column: 3;
    padding: 50px;
    font-size: 1.2rem;
    font-weight: 500;

    .contact-links {
      margin-top: 10px;
    }
    a {
      margin-right: 10px;
    }

    p:last-of-type {
      margin-top: 90px;
      font-style: italic;
    }
  }

  hr {
    border: 1px solid black;
    margin-top: 50px;
    width: 100%;
  }

  button {
    grid-row: 3;
    grid-column: 1;
    margin-left: 60px;
    outline: none;
    border: 1px solid black;
    background-color: transparent;
    border-radius: 50%;
    width: 55px;
    height: 55px;
    cursor: pointer;
  }
  button:hover {
    transition: transform 0.4s ease;
    transform: scale(1.3);
    border: 2px solid black;
  }

  /* MEDIA QUERIES */
  @media (max-width: 400px) {
    grid-template: 1fr 1fr 8fr / 1fr;

    .contact-title {
      grid-row: 1;
      h1 {
        font-size: 3.5rem;
        line-height: 3.5rem;
        margin: 80px 20px 10px 25px;
      }
    }
    .contact-text {
      grid-row: 2;
      grid-column: 1;
      margin-top: 20px;
      padding: 30px;
      max-width: 86vw;

      p:last-of-type {
        margin-top: 60px;
      }
    }

    button {
      margin-top: 10vh;
      margin-left: 25px;
      border: 2px solid black;
      padding: 15px 5px;
      font-size: 1rem;
    }
  }
`;

function Contact() {
  const text = "test animation stuff";
  const labels = text
    .split("")
    .map((letter, idx) => (
      <span style={{ "transition-delay": idx * 35 + "ms" }}>{letter}</span>
    ));

  return (
    <ContactSection id="contact">
      <div className="contact-title">
        <h1>Contact</h1>
      </div>
      <article className="contact-text">
        <p>
          Work inquiries, love letters or random hellos can be sent to >
          <a href="hi@gunkarlsson.com">hi@gunkarlsson.com</a>
        </p>

        <hr />
        <div className="contact-links">
          <a href="https://github.com/gunkarlsson">Github</a>
          <a href="https://gunkarlsson.com/">Illustration / Animation</a>
          <a href="https://www.instagram.com/gunimation/">Instagram</a>
        </div>

        <p>
          Looking for an intern? 1st of November 2021, I'm ready to start an
          internship. If you happen to be located in Melbourne, Australia,
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
