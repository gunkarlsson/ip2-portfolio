import { ContactSection, SecondarySection } from "../style/StyledComponents";

function Contact() {
  return (
    <SecondarySection>
      <div className="section-title">
        <h1>Contact</h1>
      </div>

      <article className="contact-text">
        <p>
          Work inquiries, love letters or random hellos can be sent to{" "}
          <a href="mailto: hi@gunkarlsson.com"> hi@gunkarlsson.com</a>
        </p>
        <hr />
        <p>
          <a href="https://github.com/gunkarlsson">Github</a>
          <a href="https://gunkarlsson.com/">Animation / Illustration</a>
        </p>
      </article>
    </SecondarySection>
  );
}

export default Contact;
