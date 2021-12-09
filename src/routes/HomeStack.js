import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//custom import
import { 
    HomeScreen,
    CartScreen
} from '..';
const Stack = createStackNavigator();
const HomeStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName='Home'
            >
                {console.log(Stack.Screen)}
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Cart" component={CartScreen} />
            </Stack.Navigator>
           
        </NavigationContainer>
        // <HomeScreen/>
    )
}
export default HomeStack
const styles = StyleSheet.create({})
