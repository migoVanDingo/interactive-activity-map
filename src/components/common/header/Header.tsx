import {
  faDashboard,
  faHome,
  faMapMarked,
} from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import styled from "styled-components"
import { header, routes } from "../../../utility/constants"
import Avatar from "./Avatar"
import CreateNew from "./CreateNew"
import HeaderNavigation from "./HeaderNavigation"
import Logo from "./Logo"
import Notifications from "./Notifications"
import { useLocation } from "react-router-dom"

const username = "migo476"

const SHeader = styled.div`
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.level};

  padding: 8px 30px;
  margin: 0;
  position: relative;
  box-sizing: border-box;
  display: flex;

  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  gap: 5px;
`

const SUsername = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.color3};
  padding: 0;
  margin: 0;
  font-weight: bold;
  cursor: pointer;
`

const tabs = [
  {
    title: "Home",
    id: header.home,
    icon: faHome,
    url: routes.home,
  },
  {
    title: "Activity Map",
    id: header.map,
    icon: faMapMarked,
    url: routes.map,
  },
  {
    title: "Analytics",
    id: header.analytics,
    icon: faDashboard,
    url: routes.dashboard,
  },
]

const Header = () => {
  //Generic Hooks
  const location = useLocation()

  //State
  const [activeTab, setActiveTab] = useState<string>(
    location.pathname.replace("/", "")
  )

  //Functions
  const handleNavigate = (url: string) => {
    setActiveTab(url)
  }

  return (
    <>
      <SHeader>
        <Logo setActiveTab={handleNavigate} />
        <SUsername>{username}</SUsername>
        <CreateNew />
        <Notifications />
        <Avatar />
      </SHeader>
      <HeaderNavigation
        tabs={tabs}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
      />
    </>
  )
}

export default Header
