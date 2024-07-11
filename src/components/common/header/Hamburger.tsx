import React, { useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'



const SHamburger = styled.button`
    width: 30px;
    height: 30px;
    border: 1px solid ${({theme}) => theme.colors.color3};
    background-color: transparent;
    border-radius: 4px;

    &:hover{
      border-color: ${({theme}) => theme.colors.color5};
      cursor: pointer;
    }


`
const SIcon = styled(FontAwesomeIcon)`
    width: 100%;
    height: 100%;
    color: ${({theme}) => theme.colors.color3};

    &.hover{
      color: ${({theme}) => theme.colors.color5};
    }
    
`

const Hamburger = () => {

  const [hover, setHover] = useState<boolean>(false)

  const handleHover = () => {
      setHover(true)
  }
  const cancelHover = () => {
      setHover(false)
  }


  return (
    <SHamburger onMouseOver={handleHover} onMouseOut={cancelHover} >
        <SIcon className={hover ? "hover" : ""}  icon={faBars} />
    </SHamburger>
  )
}

export default Hamburger