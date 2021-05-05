import {
  ContactSection,
  ArrowButton,
  SecondarySection,
} from "../style/StyledComponents";

function Contact() {
  return (
    <SecondarySection>
      <ContactSection id="contact">
        <div className="contact-title">
          <h1>Contact</h1>
        </div>
        <article className="contact-text">
          <p>
            Work inquiries, love letters or random hellos can be sent to
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
        <ArrowButton>
          <i className="fas fa-arrow-up"></i>
        </ArrowButton>
      </ContactSection>
    </SecondarySection>
  );
}

export default Contact;
