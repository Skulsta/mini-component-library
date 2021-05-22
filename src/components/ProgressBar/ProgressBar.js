/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  const SIZES = {
    small: {
      height: 8 + "px",
    },
    medium: {
      height: 12 + "px",
    },
    large: {
      height: 24 + "px",
    },
  };
  return (
    <Wrapper style={SIZES[size]}>
      <Bar style={{ "--width": value + "%" }}></Bar>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: 4px;
  /* border radius when the bar is close to full */
  overflow: hidden;
`;

const Bar = styled.div`
  height: 100%;
  background-color: ${COLORS.primary};
  width: var(--width);
  border-radius: 4px 0 0 4px;
`;

export default ProgressBar;
