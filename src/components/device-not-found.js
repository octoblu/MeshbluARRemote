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
class DeviceNotFound extends React.Component {
  goBack = () => {
    this.props.navigator.push('camera')
  }

  render() {
    return (
      <StyledView>

        <StyledText>
          Invalid Meshblu device detected:
        </StyledText>
        <StyledText2>
          '{this.props.device.class}'
        </StyledText2>

        <Button title='Try Again' onPress={this.goBack}/>

      </StyledView>
    )
  }
}

DeviceNotFound.propTypes = propTypes

export default DeviceNotFound
