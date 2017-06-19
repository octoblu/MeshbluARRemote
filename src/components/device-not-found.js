import PropTypes from 'prop-types'
import React from 'react'
import { Button, Text, View } from 'react-native'
import styled from 'styled-components/native'

const StyledView = styled.View`
  flex: 1;
  justify-content: center;
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

const Margin = styled.View`
  margin: 0 50 0 50;
`

const propTypes = {
  device: PropTypes.object.isRequired
}

class DeviceNotFound extends React.Component {
  goBack = () => {
    this.props.navigation.navigate('camera')
  }

  render() {
    return (
      <StyledView>

        <StyledText>
          Invalid Meshblu device detected:
        </StyledText>
        <StyledText2>
          '{this.props.device.class}' ({(this.props.device.score*100).toFixed(2)}%)
        </StyledText2>

        <Margin>
          <Button title='Back to Camera' onPress={this.goBack}/>
        </Margin>

      </StyledView>
    )
  }
}

DeviceNotFound.propTypes = propTypes

export default DeviceNotFound
