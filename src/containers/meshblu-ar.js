import React from 'react'
import { View, StyleSheet } from 'react-native'
import Camera from 'react-native-camera'
import RNFetchBlob from 'react-native-fetch-blob'
import { Gyroscope } from 'react-native-sensors'

import Loading from '../components/loading.js'

const gyroUpdate = new Gyroscope({ updateInterval: 500 })
var picTaken

class MeshbluAR extends React.Component {
  state = {
    loading: false
  }

  constructor(props) {
    super(props)
    picTaken = false
  }

  render() {
    gyroUpdate.subscribe(gyro => {
      var totalMovement = Math.abs(gyro.x) + Math.abs(gyro.y) + Math.abs(gyro.z)
      if (totalMovement < 0.075 && !picTaken) {
        picTaken = true
        this.camera.capture()
          .then(data => {
            this.setState({ loading: true })
            RNFetchBlob.fs.readFile(data.path, 'base64')
              .then((image) => {
                var options = {
                  method: 'POST',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({ image: image })
                }
                fetch('http://34.204.40.255/recognition', options)
                  .then(response => response.json())
                  .then(responseJson => this.props.navigation.navigate('control', { device: responseJson }))
                  .catch(error => console.error(error))
              })
          })
          .catch(err => console.error(err))
      }
    })

    var display = (<Camera
                    ref={(cam) => { this.camera = cam }}
                    captureTarget={Camera.constants.CaptureTarget.temp}
                    style={styles.preview}
                    aspect={Camera.constants.Aspect.fill} />)

    if (this.state.loading) display = <Loading />

    return (
      <View style={styles.container}>
        {display}
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
