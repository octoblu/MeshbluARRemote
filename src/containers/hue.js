import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components/native'

const StyledView = styled.View`
  flex: 1;
  background-color: #14568F;
`

const StyledText = styled.Text`
  font-size: 20;
  text-align: center;
  margin: 20;
  color: #fff;
`

class Hue extends React.Component {
  render() {
    return (
      <StyledView>
        <StyledText>
          Controlling {this.props.route.params.name} ({this.props.route.params.uuid})
        </StyledText>
      </StyledView>
    )
  }
}

export default Hue
