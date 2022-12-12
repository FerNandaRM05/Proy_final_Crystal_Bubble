import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Switch from "../animations/Switch";
import { setStateDark } from "../store/slice/isDark.slices";

const ContOptionsSettings = () => {
  const isActive = useSelector((state) => state.isActive);
  const dispatch = useDispatch()
  const dark = useSelector( state => state.isDark)
  const toggle = () => dispatch( setStateDark(!dark) )

  return (
    <ContSettings isActive={isActive}>
      <ContOption>
        <p>CAT/ES</p>
        <Switch />
      </ContOption>
      <ContOption onClick={toggle}>
        <p>OSCURO</p>
        <Switch />
      </ContOption>
    </ContSettings>
  );
};

export default ContOptionsSettings;

const ContSettings = styled.div`

  width: 180px;
  height: 123px;
  position: absolute;
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  top: 68px;
  right: 0;
  z-index: -1;
  background-color: var(--ion-background-color);
  border-radius: 0px 0px 10px 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transform: ${(props) =>
    props.isActive ? "translateX(0)" : "translateX(180px)"};
  transition: all 0.2s;
`;

const ContOption = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
