import React from "react";
import Lottie from "lottie-react";
import change from "../img/switch.json";
import styled from "styled-components";

const Switch = () => {
  return (
    <ContSwitch>
      <Lottie animationData={change} />
    </ContSwitch>
  );
};

export default Switch;

const ContSwitch = styled.div`
  width: 50px;
`;
