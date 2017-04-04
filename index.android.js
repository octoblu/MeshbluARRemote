import React, { Component } from 'react'
import { AppRegistry } from 'react-native'

import Router from './src/index.js'

export default class MeshbluARRemote extends Component {
  render() {
    return (
      <Router />
    )
  }
}

AppRegistry.registerComponent('MeshbluARRemote', () => MeshbluARRemote)
