/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper>
      <Bar style={{ "--width": value + "%" }}></Bar>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 8px;
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
