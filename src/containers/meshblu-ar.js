import React from 'react'
import { View, StyleSheet } from 'react-native'
import Camera from 'react-native-camera'
import { Accelerometer } from 'react-native-sensors'

const accelUpdate = new Accelerometer({ updateInterval: 500 })
var accelHistory = []

class MeshbluAR extends React.Component {
  render() {
    accelUpdate.subscribe(accel => {
      if (accelHistory.length < 10) {
        accelHistory.unshift({x: accel.x, y: accel.y, z: accel.z})
      } else {
        accelHistory.pop()
        accelHistory.unshift({x: accel.x, y: accel.y, z: accel.z})
      }
      console.log(accelHistory)
    })

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
