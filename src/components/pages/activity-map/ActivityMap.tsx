import { useState } from "react"
import { useLoaderData, useNavigation } from "react-router-dom"
import styled from "styled-components"
import { useMapTree } from "../../../hooks/useMapTree"
import { loadingMessages } from "../../../utility/constants"
import LoadingSpinner from "../../common/LoadingSpinner"
import { SFlexCol } from "../../styled/containers/FlexContainers"
import MapMain from "./MapMain"
import Sidebar from "./sidebar/Sidebar"
import { useAnnotationData } from "../../../hooks/useAnnotationData"

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
  //Generate folder tree for sidebar
  const {
    mapTree,
    rootDescription,
    folderOpen,
    toggleFolderOpen,
    selectedNode,
    setSelectedNode,
  } = useMapTree(data)

  //process annotation data and map interactions
  const {
    participants,
    participantListFormValues,
    handleUpdateParticipants,
    actions,
    actionListFormValues,
    selectedAnnotation,
    setSelectedAnnotation,
    handleUpdateActions,
  } = useAnnotationData(data)

  //Effect Hooks

  //Functions
  const handleSelectFile = (video_name: string) => {
    video_name = video_name.replace(/\\/g, "/")
    setSelectedAnnotation(video_name)
  }

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
          handleSelectFile={handleSelectFile}
        />
        <MapMain
          participants={participants}
          toggleParticipantList={participantListFormValues}
          handleUpdateParticipants={handleUpdateParticipants}
          actions={actions}
          toggleActionList={actionListFormValues}
          handleUpdateActions={handleUpdateActions}
          selectedAnnotation={selectedAnnotation}
        />
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

  const annotationData = ""

  return { formData, groups, annotationData }
}
