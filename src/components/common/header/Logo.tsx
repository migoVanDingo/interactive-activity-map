import React from 'react'
import styled from 'styled-components'
import LogoImg from '../../../assets/Logo.png'
import { useNavigate } from 'react-router-dom'
import { routes } from '../../../utility/constants'

const SLogoContainer = styled.div`
    width: 150px;
    height: 30px;

    &:hover{
      cursor: pointer;
    }
  
`
const SImage = styled.img`
    width: 150px;
    height: 30px;
    object-fit: contain;
`

const Logo = ({ setActiveTab }: any) => {

  const nav = useNavigate()

  const navHome = () => {
    setActiveTab(routes.home.replace("/", ""))
    nav(routes.home)
    
  }
  return (
    <SLogoContainer  onClick={navHome} >
        <SImage src={LogoImg}/>
    </SLogoContainer>
  )
}

export default Logo