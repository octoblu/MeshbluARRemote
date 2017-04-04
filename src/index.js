import React from 'react'
import { View } from 'react-native'
import { NativeRouter, Route } from 'react-router-native'
import styled from 'styled-components/native'

import Landing from './containers/landing.js'
import MeshbluAR from './containers/meshblu-ar.js'

const Container = styled.View`
  flex: 1;
  background: #14568F;
`

const Router = () => (
  <NativeRouter>
    <Container>
      <Route exact path="/" component={Landing}/>
      <Route path="/camera" component={MeshbluAR}/>
    </Container>
  </NativeRouter>
)

export default Router
