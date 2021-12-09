import React,{useLayoutEffect} from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';


const HomeScreen = ({navigation}) => {
    useLayoutEffect(()=>{
       navigation.setOptions({
           headerRight:()=>(
            <TouchableOpacity
            onPress={()=>navigation.navigate('Cart')}
            >
                 <Icon name="shopping-cart" size={30} color="#900" />
            </TouchableOpacity>
           )
       }) 
    },[navigation])
    return (
        <View>
            <Text>Home Screen</Text>
           
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
