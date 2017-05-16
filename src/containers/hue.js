import React from 'react'
import { Button, View, Text } from 'react-native'
import styled from 'styled-components/native'

const StyledView = styled.View`
  flex: 1;
  background-color: #14568F;
`

const CenterView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const Margin = styled.View`
  margin: 0 20 10 20;
`

const StyledText = styled.Text`
  font-size: 20;
  text-align: center;
  margin: 20;
  color: #fff;
`

class Hue extends React.Component {

  goBack = () => {
    this.props.navigator.pop()
  }

  toCamera = () => {
    this.props.navigator.push('camera')
  }

  render() {
    return (
      <StyledView>
        <StyledText>
          Controlling {this.props.route.params.name} ({this.props.route.params.uuid})
        </StyledText>
        <CenterView>
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
