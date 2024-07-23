import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import { SFlexCol} from "../styled/containers/FlexContainers";

interface IContainer {
  height: number
}
const SContainer = styled(SFlexCol)<IContainer>`
  grid-area: player;
  width: 100%;
  height: ${p => p.height + "px"};
  padding: 0;
  margin: 0;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.color1};
  

`


function Player({ currentTime, path, layout }: any) {
  const videoRef = useRef(null)

  const [height, setHeight] = React.useState(0);
  const [width, setWidth] = React.useState(0);  
  const [videoPath, setVideoPath] = React.useState("");
  

  useEffect(() => {
    if (videoRef.current) {
      // Set the video's current time to 30 seconds (for example)
      videoRef.current.addEventListener("error", handleVideoError)
      videoRef.current.currentTime = currentTime
    }
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      // Set the video's current time to 30 seconds (for example)
      videoRef.current.addEventListener("error", handleVideoError)
      videoRef.current.currentTime = currentTime
    }
  }, [currentTime])

  useEffect(() => {
    switch(layout){
      case 'layout-1':
        setHeight(360);
        setWidth(640);
        break;
      
      case 'layout-2':
        setHeight(270);
        setWidth(480);
        break;
    }
  }, [layout]);

  useEffect(() => {
    return () => {
      path && setVideoPath(path);
      (videoRef.current as HTMLVideoElement | null)?.load();
    }
  }, [path]);



  const handleVideoError = () => {
    videoRef.current &&
      console.error("Error loading the video:", videoRef.current.error)
  }

  return (
    <SContainer height={height}>
      <video controls style={{objectFit: "contain"}}  width={width} height={height} ref={videoRef} key={videoPath}>
        <source src={videoPath} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </SContainer>
  )
}

export default Player
