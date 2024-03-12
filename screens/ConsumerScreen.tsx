import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ConsumerScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ConsumerScreen</Text>
    </View>
  )
}

export default ConsumerScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      text: {
        fontSize: 30,
        color: 'white',
      },
})