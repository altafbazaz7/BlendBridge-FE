import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProviderScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ProviderScreen</Text>
    </View>
  )
}

export default ProviderScreen

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
