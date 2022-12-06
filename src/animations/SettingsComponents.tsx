import React from "react";
import Lottie from "lottie-react";
import settings from "../img/setting.json";
import styled from "styled-components";

const SettingComponent = () => {



  return (
    <ContainSettingAnimation>
      <Lottie onClick={() => console.log('Hola Mundo')} animationData={settings} loop={true}/>       
    </ContainSettingAnimation>
  );
};

export default SettingComponent;

const ContainSettingAnimation = styled.div`
  width: 45px;
  height: 45px;

  div{
    cursor: pointer;
  }
`;


