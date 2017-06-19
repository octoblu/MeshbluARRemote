import React from 'react'
import { View } from 'react-native'
import { StackNavigator } from 'react-navigation'

import Control from './containers/control.js'
import Hue from './containers/hue.js'
import Landing from './containers/landing.js'
import Login from './containers/login.js'
import MeshbluAR from './containers/meshblu-ar.js'

const App = StackNavigator(
  {
    login: { screen: Login },
    home: { screen: Landing },
    camera: { screen: MeshbluAR },
    control: { screen: Control },
    hue: { screen: Hue }
  },
  {
    initialRouteName: 'home'
  }
)

export default App
