import styled from 'styled-components'
import { SFlexCol } from '../../styled/containers/FlexContainers'

const SContainer = styled(SFlexCol)`
    background-color: white;
    grid-area: main;
    height: 100vh;

`

const MapMain = () => {
  return (
    <SContainer>MapMain</SContainer>
  )
}

export default MapMain