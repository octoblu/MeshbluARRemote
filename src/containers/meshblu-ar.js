import React from 'react'
import { View, StyleSheet } from 'react-native'
import Camera from 'react-native-camera'

class MeshbluAR extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => { this.camera = cam }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
        </Camera>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
})

export default MeshbluAR
