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

class HueListItem extends React.Component {
  controlHue = () => {
    this.props.navigation.navigate('hue', { name: this.props.name, uuid: this.props.uuid })
  }

  render() {
    return (
      <StyledView>
        <Button title={this.props.name + " (" + this.props.uuid + ")"} onPress={this.controlHue}/>
      </StyledView>
    )
  }
}

HueListItem.propTypes = propTypes

export default HueListItem
