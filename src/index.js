import { createRouter, NavigationProvider, StackNavigation } from '@expo/ex-navigation';
import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'

import Control from './containers/control.js'
import Hue from './containers/hue.js'
import Landing from './containers/landing.js'
import Login from './containers/login.js'
import MeshbluAR from './containers/meshblu-ar.js'

const Container = styled.View`
  flex: 1;
  background: #14568F;
`

const Router = createRouter(() => ({
  home: () => Landing,
  camera: () => MeshbluAR,
  control: () => Control,
  hue: () => Hue,
  login: () => Login
}))

class App extends React.Component {
  render() {
    return (
      <NavigationProvider router={Router}>
        <StackNavigation initialRoute={Router.getRoute('login')} />
      </NavigationProvider>
    )
  }
}

export default App
