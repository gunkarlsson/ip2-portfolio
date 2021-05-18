import styled from "styled-components";
import { useRef, useEffect } from "react";

const CursorCircle = styled.div`
  z-index: 30;
  border-radius: 50%;
  /* border-radius:74% 26% 76% 24% / 69% 22% 78% 31% ; */
  width: 20px;
  height: 20px;
  border: 1px solid ${(props) => props.theme.fontColor1};
  pointer-events: none;
  overflow: hidden;
  /* transform: translate3d(0, 0, 0); */
  position: fixed;
  top: 0;
  left: 0;
  transition: 0.15s ease;
  transform: translate(-50%, -50%);

  /* &:before {
    position: fixed;
    content: "";
    transform: tran;
  }
  &:after {
    position: fixed;
    content: "";
    width: 60px;
    height: 30px;
  } */
`;

export const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      const mouseX = clientX - cursorRef.current.clientWidth / 2;
      const mouseY = clientY - cursorRef.current.clientHeight / 2;
      cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    });
  });

  return <CursorCircle ref={cursorRef}></CursorCircle>;
};
