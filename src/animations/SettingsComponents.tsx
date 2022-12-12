import React, { useEffect, useRef, useState } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import settings from "../img/setting.json";
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux'
import { setStateActive } from "../store/slice/isActiveState.slice";

const SettingComponent = () => {

  const lottieRef:any = useRef()
  const dispatch = useDispatch()
  const isActive = useSelector( (state:any) => state.isActive )
  const [ prueba, setPrueba ] = useState(false)

  const changeState = () => {
    setPrueba(!prueba)
    dispatch(setStateActive(!isActive))}

  useEffect( () => {
    lottieRef.current.setSpeed(1.5);
    if (prueba) {
      lottieRef.current.playSegments([5, 20], true);
    }else{
      lottieRef.current.playSegments([15, 3], true);
    }
    
  }, [isActive] )
  

  return (
    <ContainSettingAnimation>
      <Lottie  lottieRef={lottieRef} onClick={changeState} animationData={settings} loop={false}/>       
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


