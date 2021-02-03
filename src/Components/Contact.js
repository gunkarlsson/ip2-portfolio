import React from "react";
import styled from "styled-components";
import { animateScroll as scroll } from "react-scroll";

const ContactDiv = styled.div`
  /* height: 100vh; */
`;
function Contact() {
  return (
    <ContactDiv id="contact">
      This is contact
      <button onClick={() => scroll.scrollToTop()}>
        <i class="fas fa-arrow-up"></i>
      </button>
    </ContactDiv>
  );
}

export default Contact;
