import {
  faArrowLeft,
  faArrowRight,
  faCaretDown,
  faCaretRight,
  faFile,
  faFolder,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { SFlexCol, SFlexRow } from "../../../styled/containers/FlexContainers"

const SContainer = styled(SFlexCol)`
  background-color: ${({ theme }) => theme.colors.color0};
  grid-area: sidebar;
  height: 100vh;
  border-right: 1px solid ${({ theme }) => theme.colors.color1};

  left: 0;
  width: 100%;

  transition: all 0.3s ease;

  &.close-sidebar {
    left: -330px;
  }
`
const SIcon = styled(FontAwesomeIcon)`
  font-size: 1.2rem;
  font-weight: 200;
  color: ${({ theme }) => theme.colors.color4};
  cursor: pointer;
  margin: 10px;
  padding: 7px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};

  border: 1px solid ${({ theme }) => theme.colors.color3};

  &:hover {
    color: ${({ theme }) => theme.accent.color1};
    border: 1px solid ${({ theme }) => theme.accent.color1};
  }

  &.folder-icons {
    color: ${({ theme }) => theme.colors.color5};
    font-size: 0.9rem;
    margin: 3px;
    padding: 3px;
    border: none;
  }

  &.isHover {
    color: ${({ theme }) => theme.accent.color1};
  }
`

const STopContainer = styled(SFlexRow)`
  width: 100%;
  justify-content: flex-end;
`

const SSidebarContent = styled(SFlexCol)`
  width: 380px;

  background-color: ${({ theme }) => theme.colors.color0};
  padding: 10px;
  box-sizing: border-box;
  &.close-sidebar {
    display: none;
  }
`

interface IFolderNode {
  marLeft: string
}
const SFolderNode = styled(SFlexRow)<IFolderNode>`
  width: 100%;
  height: 30px;
  box-sizing: border-box;
  font-size: 0.8rem;
  padding: 5px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};


  margin: 0 0 0 ${({ marLeft }) => marLeft};
  align-items: center;
  justify-content: baseline;
  cursor: pointer;

  transition: all 0.3s ease;
  &.isHover {
    color: ${({ theme }) => theme.accent.color1};
  }

  &.close{
    height: 0px;
    overflow: hidden;
    padding: 0;
  }
  
`

const SFolderName = styled.div`
  margin-left: 10px;

  color: ${({ theme }) => theme.colors.color5};
  &.isHover {
    color: ${({ theme }) => theme.accent.color1};
  }
  
`

const Sidebar = ({
  isSidebarActive,
  toggleSidebar,
  mapTree,
  rootDescription,
  folderOpen,
  toggleFolderOpen,
  selectedNode,
  setSelectedNode,
  handleSelectFile
}: any) => {

  const [hover, setHover] = useState<string>("")
  

  const [styleMarLeft, setStyleMarLeft] = useState<number>(0)

  const handleToggleSidebar = () => {
    toggleSidebar(!isSidebarActive)
  }

  

  const mouseOver = (node: string) => {
    setHover(node)
  }
  const mouseOut = () => {
    setHover("")
  }

  const handleToggleFolder = (e: any) => {
 
    let id = e.target.id
    if(id === ""){
      id = e.target.parentElement.id
    }
    console.log('id: ', id)
    setSelectedNode(id)
    toggleFolderOpen(id)
  }

  useEffect(() => {
    console.log('mapTree: ', mapTree)
  }, [mapTree]);

  

  return (
    <SContainer className={isSidebarActive ? "" : "close-sidebar"}>
      <STopContainer>
        <SIcon
          onClick={handleToggleSidebar}
          icon={isSidebarActive ? faArrowLeft : faArrowRight}
        />
      </STopContainer>
      <SSidebarContent className={isSidebarActive ? "" : "close-sidebar"}>
        {mapTree &&
          mapTree.map((node: any, index: number, arr: any) => {
            return (
              <SFolderNode
                marLeft={
                  node.key === "level" ? "10px":
                  node.key === "school" ? "20px":
                  node.key === "quality" ? "30px":
                  node.key === "date" ? "40px":
                  node.key === "group" ? "50px":
                  node.key === "video_name" ? "60px": "0px"
                }
                key={node.index}
                id={node.index}
                onClick={node.isFolder ? (e: any) => handleToggleFolder(e) : (e: any) => handleSelectFile(node.link)}
                onMouseOver={() => mouseOver(node.index)}
                onMouseOut={mouseOut}
                className={`${hover === node.index ? "isHover":""} ${node.index === selectedNode ? "" : folderOpen[node.index] ? "" : "close"} `}
              >
                {node.isFolder ? (folderOpen[node.index] ? (
                  <SIcon  id={node.index} className={hover === node.index  ? "isHover folder-icons" : "folder-icons"} icon={faCaretDown} />
                ) : (
                  <SIcon  id={node.index} className={hover === node.index  ? "isHover folder-icons" : "folder-icons"} icon={faCaretRight} />
                )) : ""}
                {node.isFolder ? (
                  <SIcon  id={node.index} className={hover === node.index  ? "isHover folder-icons" : "folder-icons"} icon={faFolder} />
                ) : (
                  <SIcon  id={node.index} className={hover === node.index  ? "isHover folder-icons" : "folder-icons"} icon={faFile} />
                )}
                <SFolderName id={node.index} className={hover === node.index  ? "isHover" : ""}>{!node.isFolder ? node.index.replace("video_name:", "") : node.index}</SFolderName>
              </SFolderNode>
            )
          })}
      </SSidebarContent>
    </SContainer>
  )
}

export default Sidebar
