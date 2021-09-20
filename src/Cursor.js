import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import styled from "@emotion/styled";
import useMousePosition from "./hooks/useMousePosition";
import { Box } from "@chakra-ui/react";

gsap.registerPlugin(CSSRulePlugin);

const Point = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.2);
  width: 10px;
  height: 10px;
  left: -10px;
  top: -10px;
  border-radius: 100%;
  /* user-select: none; */
  pointer-events: none;
  z-index: 10000;
`;

const PointFollower = styled.div`
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.2);
  width: 30px;
  height: 30px;
  left: -21px;
  top: -21px;
  border-radius: 100%;
  z-index: 1;
  user-select: none;
  pointer-events: none;
  z-index: 10000;
  overflow: hidden;
  /* transform: scale(1); */
`;

function Cursor({ isCursorActive }) {
  const point = useRef();
  const pointFollower = useRef();
  const text = useRef();

  const { x, y } = useMousePosition();

  function handleMoveCursor(x, y) {
    gsap.to(point.current, {
      x,
      y,
      duration: 0.3,
    });
    gsap.to(pointFollower.current, {
      x,
      y,
      duration: 0.7,
    });
  }

  useEffect(() => {
    handleMoveCursor(x, y);
  }, [x, y]);

  useEffect(() => {
    gsap.to(pointFollower.current, {
      opacity: isCursorActive ? 0.3 : 1,
      ease: "power2.inOut",
      scale: isCursorActive ? 0 : 1,
    });

    gsap.to(point.current, {
      ease: "power2.inOut",
      scale: isCursorActive ? 10 : 1,
    });
    gsap.to(text.current, {
      scale: 0.2,
      opacity: isCursorActive ? 1 : 0,
      color: "white",
    });
  }, [isCursorActive]);

  return (
    <>
      <Point ref={point}>
        <Box
          ref={text}
          style={{
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: "100%",
            content: "wave",
            display: "block",
            left: -15,
            top: -7,
            position: "absolute",
          }}
        >
          Wave
        </Box>
      </Point>
      <PointFollower ref={pointFollower}></PointFollower>
    </>
  );
}

export default Cursor;
