import { useEffect, useState } from "react"
import { useLoaderData, useNavigation } from "react-router-dom"
import styled from "styled-components"
import { loadingMessages } from "../../../utility/constants"
import LoadingSpinner from "../../common/LoadingSpinner"
import { SFlexCol } from "../../styled/containers/FlexContainers"
import MapMain from "./MapMain"
import Sidebar from "./sidebar/Sidebar"
import { useMapTree } from "../../../hooks/useMapTree"

const SContainer = styled(SFlexCol)`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 380px auto;
  grid-template-rows: 100%;
  grid-template-areas: "sidebar main";
  background-color: ${({ theme }) => theme.colors.color0};
  position: relative;

  transition: all 0.3s ease;

  &.close-sidebar {
    grid-template-columns: 50px auto;
  }

  padding: 0;
  margin: 0;
`

interface ILoaderData {
  formData: any
  groups: any
}

const ActivityMap = () => {
  //Generic hooks
  const data = useLoaderData()
  const navigation = useNavigation()
  const loading = navigation.state === "loading"

  //State hooks
  const [isSidebarActive, setSidebarActive] = useState<boolean>(true)

  //Custom hooks
  const { mapTree, rootDescription, folderOpen, toggleFolderOpen, selectedNode, setSelectedNode } = useMapTree(data)


  //Effect Hooks


  if (loading && mapTree !== null) {
    return <LoadingSpinner message={loadingMessages.map} />
  } else
    return (
      <SContainer className={isSidebarActive ? "" : "close-sidebar"}>
        <Sidebar
          isSidebarActive={isSidebarActive}
          toggleSidebar={setSidebarActive}
          mapTree={mapTree}
          rootDescription={rootDescription}
          folderOpen={folderOpen}
          toggleFolderOpen={toggleFolderOpen}
          selectedNode={selectedNode}
          setSelectedNode={setSelectedNode}
        />
        <MapMain />
      </SContainer>
    )
}

export default ActivityMap

export const loader = () => {
  const formData = localStorage.getItem("formData")
    ? JSON.parse(localStorage.getItem("formData")!)
    : {}
  const groups = localStorage.getItem("groups")
    ? JSON.parse(localStorage.getItem("groups")!)
    : []

  return { formData, groups }
}
