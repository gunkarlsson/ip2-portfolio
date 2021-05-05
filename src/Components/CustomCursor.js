import styled from "styled-components";
import { useRef, useEffect } from "react";

const CursorCircle = styled.div`
  z-index: 100;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  border: 1px solid blue;
  pointer-events: none;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
  position: fixed;
  top: 0;
  left: 0;
  /* transition: 0.1s ease; */
  transform: translate(-50%, -50%);
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
