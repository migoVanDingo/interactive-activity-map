import styled from "styled-components"
import Player from "../../common/Player"
import ToggleModule from "../../common/ToggleModule"
import { SFlexRow } from "../../styled/containers/FlexContainers"
import ActivityMapHeader from "./ActivityMapHeader"
import LabelTimelineMap from "./LabelTimelineMap"
import { useEffect, useState } from "react"

const SContainer = styled.div`
  background-color: white;
  width: 100%;
  grid-area: main;
  box-sizing: border-box;

  display: grid;
  overflow-y: auto;
  position: relative;
  padding: 20px 40px 40px;
  height: 100vh;

  top: 0;
  margin: 0;
  gap: 20px;

  grid-template-columns: repeat(4, calc(calc(858px * 3) / 16)) auto;
  grid-template-rows: 80px 300px auto;
  grid-template-areas:
    "header  header  header  header  header"
    "options options options options map"
    "player  player  player  player  map";

  &.layout-1 {
    grid-template-columns: repeat(4, calc(calc(858px * 3) / 16)) auto;
    grid-template-rows: 80px 300px auto;
    grid-template-areas:
      "header  header  header  header  header"
      "options options options options map"
      "player  player  player  player  map";
  }

  &.layout-2 {
    grid-template-columns: repeat(4, calc(calc(858px * 3) / 16)) auto;
    grid-template-rows: 80px 300px auto;
    grid-template-areas:
      "header  header  header  header  header"
      "options options options  player  player"
      "map     map     map     map     map";
  }
`

const SOptionsContainer = styled(SFlexRow)`
  grid-area: options;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
  border: 1px solid red;
`

const MapMain = ({
  participants,
  handleUpdateParticipants,
  actions,
  actionListFormValues,
  participantListFormValues,
  handleUpdateActions,
  selectedAnnotation,
}: any) => {
  const [layout, setLayout] = useState("layout-2")
  const [videoTime, setVideoTime] = useState(0)
  const [annotationArr, setAnnotationArr] = useState([])

  const handleVideoSkipTime = (time: number) => {
    setVideoTime(time)
  }

  useEffect(() => {
   return () => {
        console.log("selectedAnnotation: ", selectedAnnotation)
    }
    
  }, [selectedAnnotation]);
  return (
    <SContainer className={layout}>
      <ActivityMapHeader
        setLayout={() => console.log("not implemented")}
        title={"not implemented"}
        id={"not implemented"}
      />
      <SOptionsContainer>
        {participantListFormValues && participants.length > 0 && (
          <ToggleModule
            heading={"Participants"}
            handleUpdateList={handleUpdateParticipants}
            list={participantListFormValues}
          />
        )}
        {actionListFormValues && actionListFormValues.length > 0 && (
          <ToggleModule
            heading={"Actions"}
            handleUpdateList={handleUpdateActions}
            list={actionListFormValues}
          />
        )}
      </SOptionsContainer>
      <Player
        layout={layout}
        currentTime={videoTime}
        path={selectedAnnotation}
      />
      <LabelTimelineMap
        layout={layout}
        handleVideoSkipTime={handleVideoSkipTime}
        annotationArr={annotationArr}
        participantsList={participants}
        actionsList={actions}
      />
    </SContainer>
  )
}

export default MapMain
