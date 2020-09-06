import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import SigninScreen from './src/screens/auth/SigninScreen'
const App = () => {
  return (
    <View style={styles.container}>
      <SigninScreen />
    </View>
  )
}

export default App
console.disableYellowBox = true
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})