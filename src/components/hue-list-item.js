import { withNavigation } from '@expo/ex-navigation'
import PropTypes from 'prop-types'
import React from 'react'
import { Button, View } from 'react-native'
import styled from 'styled-components/native'

const StyledView = styled.View`
  margin: 0 20 10 20;
`

const propTypes = {
  name: PropTypes.string.isRequired,
  uuid: PropTypes.string.isRequired
}

@withNavigation
class HueListItem extends React.Component {
  goBack = () => {
    this.props.navigator.push('camera')
  }

  render() {
    return (
      <StyledView>
        <Button title={this.props.name + " (" + this.props.uuid + ")"} onPress={this.goBack}/>
      </StyledView>
    )
  }
}

HueListItem.propTypes = propTypes

export default HueListItem
