import React, { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import change from "../img/switch.json";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

const Switch = () => {
  const lottieRef:any = useRef();
  const [lenguage, setLengueage] = useState(false);
  const dark:any = useSelector<any>( state => state.isDark)
  document.body.classList.toggle('dark', dark);


  useEffect(() => {
    lottieRef.current.setSpeed(3.5);
    if (lenguage) {
      lottieRef.current.playSegments([10, 40], true);
    } else {
      lottieRef.current.playSegments([70, 104], true);
    }
    
  }, [lenguage]);

  return (
    <ContSwitch>
      <Lottie
        lottieRef={lottieRef}
        animationData={change}
        onClick={() => setLengueage(!lenguage)}
        loop={false}
      />
    </ContSwitch>
  );
};

export default Switch;

const ContSwitch = styled.div`
  width: 50px;
`;
