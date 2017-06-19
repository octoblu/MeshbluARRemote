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
  margin: 20;
  color: #fff;
`

const Margin = styled.View`
  margin: 0 50 0 50;
`

class Landing extends React.Component {
  nextPage = () => {
    this.props.navigation.navigate('camera')
  }

  render() {
    return (
      <StyledView>

        <StyledText>
          Welcome to the Meshblu Augmented Reality Remote!
          Point your phone's camera at a device you have added
          to Meshblu and control it remotely...
        </StyledText>

        <Margin>
          <Button title='Get Started' onPress={this.nextPage}/>
        </Margin>

      </StyledView>
    )
  }
}

export default Landing
