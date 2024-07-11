import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { SFlexRow } from "../../styled/containers/FlexContainers"


const SContainer = styled(SFlexRow)`
  grid-area: tabs;
  align-items: end;
  gap: 20px;
  padding: 0 0 0 40px;
  background-color: ${({ theme }) => theme.colors.color1};
  border-bottom: 1px solid ${({ theme }) => theme.colors.color2};
`

const STab = styled(SFlexRow)`
  gap: 5px;
  font-size: 0.9rem;
  box-sizing: border-box;
  padding: 5px ;
  transition: all 0.3s ease;
  border-bottom: 2px solid transparent;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.colors.color4};

  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.colors.color3};
    color: ${({ theme }) => theme.colors.color3};
    cursor: pointer;
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.accent.color1};
    color: ${({ theme }) => theme.accent.color1};
  }
`

const SIcon = styled(FontAwesomeIcon)``

const HeaderNavigation
 = ({ activeTab, setActiveTab, tabs}: any) => {
  
  const nav = useNavigate()

  const handleClickTab = (id: string, url: string) => {
    console.log(id)
    setActiveTab(id)
    nav(url)
  }

  return (
    <SContainer>
      {tabs &&
        tabs.map((tab: any, index: number) => {
          return (
            <STab
              key={index}
              className={activeTab === tab.id ? "active" : ""}
              onClick={() => handleClickTab(tab.id, tab.url)}
        
            >
              <SIcon icon={tab.icon} />
              {tab.title}
            </STab>
          )
        })}
    </SContainer>
  )
}


export default HeaderNavigation

