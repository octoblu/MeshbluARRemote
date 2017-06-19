import React from 'react'
import { Button, View, Text } from 'react-native'
import styled from 'styled-components/native'
import t from 'tcomb-form-native'

import userCreds from '../../meshblu-user.json'

var Form = t.form.Form
var options = {}
var Light = t.struct({
  color: t.String,
  power: t.Boolean
})

const StyledView = styled.View`
  flex: 1;
  background-color: #14568F;
`

const CenterView = styled.View`
  flex: 1;
  justify-content: center;
  margin: 0 50 0 50;
`

const StyledText = styled.Text`
  font-size: 20;
  text-align: center;
  margin: 20;
  color: #fff;
`

const Margin = styled.View`
  margin-top: 10;
`

class Hue extends React.Component {
  state = {
    value: null
  }

  onChange = (value) => {
    this.setState({ value })
  }

  clearForm = () => {
    this.setState({ value: null })
  }

  sendMessage = () => {
    var value = this.refs.form.getValue()
    if (value) {
      var url = 'https://meshblu.octoblu.com/v2/devices/' + this.props.navigation.state.params.uuid
      var options = {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-MESHBLU-UUID': userCreds.uuid,
          'X-MESHBLU-TOKEN': userCreds.token
        },
        body: JSON.stringify({ "$set": { "desiredState": { "on": value.power, "color": value.color }}})
      }
      fetch(url, options)
        .then(response => this.clearForm())
        .catch(error => console.error(error))
    }
  }

  goBack = () => {
    this.props.navigator.pop()
  }

  toCamera = () => {
    this.props.navigation.navigate('camera')
  }

  render() {
    return (
      <StyledView>

        <StyledText>
          Controlling {this.props.navigation.state.params.name} ({this.props.navigation.state.params.uuid})
        </StyledText>

        <CenterView>
          <Form
            ref="form"
            type={Light}
            value={this.state.value}
            onChange={this.onChange.bind(this)}
          />

          <Margin>
            <Button title='Send Message' onPress={this.sendMessage}/>
          </Margin>
          <Margin>
            <Button title='Back to List' onPress={this.goBack}/>
          </Margin>
          <Margin>
            <Button title='Back To Camera' onPress={this.toCamera}/>
          </Margin>
        </CenterView>

      </StyledView>
    )
  }
}

export default Hue
