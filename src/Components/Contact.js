import React from "react";
import styled from "styled-components";
import { animateScroll as scroll } from "react-scroll";

const ContactSection = styled.section`
  overflow: hidden;
  border: 2px solid yellow;
  display: grid;
  grid-template: 1fr 6fr 1fr / 6fr 1fr 9fr 1fr;

  button {
    grid-row: 3;
    grid-column: 1;
    margin-left: 50px;
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
  .contact-title {
    grid-row: 1 / -1;
    grid-column: 1;
    background-color: var(--primary-color);

    h1 {
      font-size: 5rem;
      line-height: 3rem;
      margin: 300px 20px 0 50px;
    }
  }

  .contact-text {
    margin-top: 100px;
    max-width: 52vw;
    grid-row: 2;
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
`;

const LabelWrapper = styled.div`
  position: absolute;
  display: inline-block;

  :hover span {
    color: blue;
    transition: 0.3s cubic-bezier(0.65, 0.01, 0.35, 1);
  }

  :hover span {
    transform: translateY(-20px);
  }

  span {
    color: red;
  }

  /* position: absolute;
  :hover span {
    color: blue;
    transform: translateY(-20px);
  }
  span {
    transition: 0.3s cubic-bezier(0.65, 0.01, 0.35, 1);
    color: red;
  } */
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
          <LabelWrapper>{labels}</LabelWrapper>
        </p>
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
