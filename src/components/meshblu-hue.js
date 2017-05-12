import { withNavigation } from '@expo/ex-navigation';
import PropTypes from 'prop-types'
import React from 'react'
import { Button, Text, View } from 'react-native'
import styled from 'styled-components/native'

const StyledView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #14568F;
`

const StyledText = styled.Text`
  font-size: 20;
  text-align: center;
  margin: 0 20 10 20;
  color: #fff;
`

const StyledText2 = styled.Text`
  font-size: 20;
  text-align: center;
  margin: 0 20 20 20;
  color: #fff;
`

const propTypes = {
  device: PropTypes.object.isRequired
}

@withNavigation
class MeshbluHue extends React.Component {
  goBack = () => {
    this.props.navigator.push('camera')
  }

  render() {
    var deviceName = this.props.device.class
    deviceName = deviceName.charAt(0).toUpperCase() + deviceName.slice(1)
    return (
      <StyledView>

        <StyledText>
          Detected Phillips Hue {deviceName}({(this.props.device.score*100).toFixed(2)}%)
        </StyledText>
        <StyledText2>
          Which Meshblu device is it?
        </StyledText2>

        <Button title='Back To Camera' onPress={this.goBack}/>

      </StyledView>
    )
  }
}

MeshbluHue.propTypes = propTypes

export default MeshbluHue
