import React from 'react'
import { View, StyleSheet } from 'react-native'
import Camera from 'react-native-camera'
import { Gyroscope } from 'react-native-sensors'

const gyroUpdate = new Gyroscope({ updateInterval: 500 })

class MeshbluAR extends React.Component {
  render() {
    gyroUpdate.subscribe(gyro => {
      var totalMovement = Math.abs(gyro.x) + Math.abs(gyro.y) + Math.abs(gyro.z)
      if(totalMovement < 0.075) {
        console.log("Phone has stopped moving, time to take a pic")
      }
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
