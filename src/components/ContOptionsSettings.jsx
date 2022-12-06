import React from 'react'
import styled from 'styled-components'

const ContOptionsSettings = () => {
  return (
    <ContSettings>

    </ContSettings>
  )
}

export default ContOptionsSettings

const ContSettings = styled.div`
    width: 180px;
    height: 130px;
    position: absolute;
    top: 65px;
    right: 0;
    background-color: white;
    border-radius: 10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    animation-name: options;
    animation-duration: 0.5s;

    @keyframes options {
        from {
            transform : translateX(100%) ;
        }   

        to{
            transform: translateX(0%);
        }
    }
`