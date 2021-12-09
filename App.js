import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
//custom import
import { HomeStack } from './src'
import { store } from './src'


const App = () => {
    return (
        // <Provider>
              <HomeStack/>
        // </Provider>
          
      
    )
}

export default App

const styles = StyleSheet.create({})
