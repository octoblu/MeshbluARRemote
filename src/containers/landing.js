import React from 'react'
import { Text, View } from 'react-native'
import { Link } from 'react-router-native'
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
  margin: 20;
  color: #fff;
`

const LinkText = styled.Text`
  font-size: 20;
  text-align: center;
  color: #77bc43;
`

class Landing extends React.Component {
  render() {
    return (
      <StyledView>

        <StyledText>
          Welcome to the Meshblu Augmented Reality Remote!
          Point your phone's camera at a device you have added
          to Meshblu and control it remotely...
        </StyledText>

        <Link to='/camera'>
          <LinkText>Get Started</LinkText>
        </Link>

      </StyledView>
    )
  }
}

export default Landing
