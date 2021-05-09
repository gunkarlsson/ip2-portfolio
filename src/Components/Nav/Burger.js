import React, { useState } from "react";
import styled from "styled-components";
import MenuList from "./MenuList";

const BurgerIcon = styled.div`
  z-index: 20;
  position: fixed;
  top: 55px;
  right: 65px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;

  cursor: pointer;

  .burger-line {
    width: 2rem;
    height: 0.25rem;
    background-color: ${(props) => props.theme.fontColor1};
    border-radius: 10px;
    transform-origin: 1px;
    transition: transform 0.3s ease-in-out, opacity 0.1s ease;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }

  @media (max-width: 400px) {
    top: 40px;
    right: 40px;
  }
`;

function Burger() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <BurgerIcon open={open} onClick={() => setOpen(!open)}>
        <div className="burger-line" />
        <div className="burger-line" />
        <div className="burger-line" />
      </BurgerIcon>
      <MenuList open={open} />
    </>
  );
}

export default Burger;
