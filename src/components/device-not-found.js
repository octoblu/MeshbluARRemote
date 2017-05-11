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
    var data = this.props.data;
    console.log(data)
    return (
      <StyledView>

        <StyledText>
          A valid Meshblu Device was not detected....
        </StyledText>

        <Link to='/camera'>
          <LinkText>Try Again</LinkText>
        </Link>

      </StyledView>
    )
  }
}

export default Landing
