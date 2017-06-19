import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'

import DeviceNotFound from '../components/device-not-found.js'
import MeshbluHue from '../components/meshblu-hue.js'

const StyledView = styled.View`
  flex: 1;
`

class Control extends React.Component {
  render() {
    var device = <DeviceNotFound device={this.props.navigation.state.params.device}/>
    if(this.props.navigation.state.params.device.class == 'bulb' || this.props.navigation.state.params.device.class == 'bloom') device = <MeshbluHue device={this.props.navigation.state.params.device}/>
    return (
      <StyledView>
        {device}
      </StyledView>
    )
  }
}

export default Control
