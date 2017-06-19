import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'
import { Button, Text, View } from 'react-native'
import styled from 'styled-components/native'

import HueListItem from './hue-list-item.js'

import userCreds from '../../meshblu-user.json'

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

class MeshbluHue extends React.Component {
  state = {
    devices: null
  }

  constructor(props) {
    super(props)

    var options = {
      method: 'POST',
      body: JSON.stringify({online: true, type: 'device:hue-light'}),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-MESHBLU-UUID': userCreds.uuid,
        'X-MESHBLU-TOKEN': userCreds.token
      }
    }
    fetch('https://meshblu.octoblu.com/search/devices', options)
      .then(response => response.json())
      .then(responseJson => this.setState({devices: _.map(responseJson, device => [device.name, device.uuid])}))
      .catch(error => console.error(error))
  }

  goBack = () => {
    this.props.navigation.navigate('camera')
  }

  render() {
    var deviceName = this.props.device.class
    deviceName = deviceName.charAt(0).toUpperCase() + deviceName.slice(1)

    var key = 0
    var deviceList = _.map(this.state.devices, device => <HueListItem key={key++} name={device[0]} uuid={device[1]}/>)

    return (
      <StyledView>

        <StyledText>
          Detected Phillips Hue {deviceName}({(this.props.device.score*100).toFixed(2)}%)
        </StyledText>
        <StyledText2>
          Which Meshblu device is it?
        </StyledText2>

        {deviceList}

        <Margin>
          <Button title='Back To Camera' onPress={this.goBack}/>
        </Margin>

      </StyledView>
    )
  }
}

MeshbluHue.propTypes = propTypes

export default MeshbluHue
