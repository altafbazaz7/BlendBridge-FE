import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AdminScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>AdminScreen</Text>
    </View>
  )
}

export default AdminScreen

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