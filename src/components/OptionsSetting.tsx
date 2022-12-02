import React from 'react'
import styled from 'styled-components'
import Switch from '../animations/Switch'

const OptionsSetting = () => {
  return (
    <ContainOptions>
        <ContTextSwitch>
            <p>ES/CAT</p>
            <Switch />
        </ContTextSwitch>
        
    </ContainOptions>
  )
}

export default OptionsSetting


const ContainOptions = styled.div`
    width: 180px;
    height: 130px;
    position: absolute;
    right: 0;
    top: 44px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    z-index: 20;
    background-color: #FFFFFF;
    padding: 10px;
`

const ContTextSwitch = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
` 