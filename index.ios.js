import React, { Component } from 'react'
import { AppRegistry } from 'react-native'

import Landing from './src/containers/landing.js'

export default class MeshbluARRemote extends Component {
  render() {
    return (
      <Landing />
    )
  }
}

AppRegistry.registerComponent('MeshbluARRemote', () => MeshbluARRemote)
