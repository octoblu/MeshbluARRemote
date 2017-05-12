import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'

import DeviceNotFound from '../components/device-not-found.js'

const StyledView = styled.View`
  flex: 1;
`

class Control extends React.Component {
  render() {
    return (
      <StyledView>
        <DeviceNotFound device={this.props.route.params.device}/>
      </StyledView>
    )
  }
}

export default Control
