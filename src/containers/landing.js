import React, { PropTypes } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

class Landing extends React.Component {

  onPress = () => {}

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.text}>
          Welcome to the Meshblu Augmented Reality Remote!
          Point your phone's camera at a device you have added
          to Meshblu and control it remotely...
        </Text>

        <View style={styles.button}>
          <Button
            title='Get Started'
            onPress={this.onPress}
            color='#77bc43'
            />
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#14568F',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
    color: '#77bc43',
  },
  button: {
    backgroundColor: '#333333',
  }
})

export default Landing
