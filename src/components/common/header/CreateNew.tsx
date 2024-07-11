import {
  faBookBookmark,
  faBuilding,
  faChevronDown,
  faDatabase,
  faPlus,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { SFlexCol, SFlexRow } from "../../styled/containers/FlexContainers"

const SContainer = styled(SFlexRow)`
  border: 1px solid ${({ theme }) => theme.colors.color3};
  box-sizing: border-box;
  height: 25px;
  padding: 3px;
  border-radius: 4px;
  align-items: center;
  

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.color5};
    cursor: pointer;
  }
`

const SButtonContainer = styled(SFlexCol)`
  margin-left: auto;
  position: relative;
  box-sizing: border-box;
`

const SIcon = styled(FontAwesomeIcon)`
  height: 13px;
  width: 13px;
  color: ${({ theme }) => theme.colors.color3};
  padding: 3px 3px 3px 0;

  &.hover {
    color: ${({ theme }) => theme.colors.color5};
  }

  &.dropdown {
  }
`

const SMenu = styled.ul`
  width: 160px;
  position: absolute;
  top: 28px;
  right: 0;
  background-color: ${({ theme }) => theme.colors.color0};
  opacity: 1;
  padding: 5px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  box-sizing: border-box;
  box-shadow: 2px 2px 6px ${({ theme }) => theme.colors.color5};
  z-index: 10;
`

const SListItem = styled.li`
  width: 100%;
  list-style: none;
  padding: 7px 15px;
  font-size: 0.8rem;
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.color3};
  &:hover {
    background-color: ${({ theme }) => theme.colors.levelq};
    color: ${({ theme }) => theme.colors.color5};
    cursor: pointer;
  }
`

const CreateNew = () => {
  const navigate = useNavigate()

  const [hover, setHover] = useState<boolean>(false)
  const [isMenuActive, setMenuActive] = useState<boolean>(false)
  

  const handleHover = () => {
    setHover(true)
  }
  const cancelHover = () => {
    setHover(false)
  }

  const handleClickCreateNew = () => {
    
    setMenuActive(!isMenuActive)
    
  }

  const handleNavigateNewRepo = () => {
    setMenuActive(false)
    navigate("/repository/create")
  }

  const handlNavigateNewOrganization = () => {
    setMenuActive(false)
    navigate("/organization/create")
  }

  

  return (
    <SButtonContainer id="header-dropdown-menu">
      <SContainer
        onMouseOver={handleHover}
        onMouseOut={cancelHover}
        onClick={handleClickCreateNew}
      >
        <SIcon className={hover ? "hover drop-down-child" : "drop-down-child"} icon={faPlus} />
        <SIcon className={hover ? "hover drop-down-child" : "drop-down-child"} icon={faChevronDown} />
      </SContainer>
      {isMenuActive && (
        <SMenu>
          <SListItem
            className="drop-down-child"
            onClick={handleNavigateNewRepo}
          >
            <SIcon icon={faBookBookmark} />
            New Repository
          </SListItem>
          <SListItem className="drop-down-child">
            <SIcon icon={faDatabase} />
            New Dataset
          </SListItem>
          <SListItem onClick={handlNavigateNewOrganization} className="drop-down-child">
            <SIcon icon={faBuilding} />
            New Organization
          </SListItem>
        </SMenu>
      )}
    </SButtonContainer>
  )
}

export default CreateNew
