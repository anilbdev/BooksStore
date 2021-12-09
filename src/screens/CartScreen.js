import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { StyleSheet, Text, View,Button } from 'react-native'
//custom import
import {increment,decrement} from '../redux/reducer'

const CartScreen = () => {
    const counter =useSelector((state) =>{
      
        return state.counterReducer.counter})
    const dispatch = useDispatch()
    return (
        <View>
            <Button onPress={()=>dispatch(increment())} title='increase' />
            <Button onPress={()=>dispatch(decrement())} title='decrease' />
            <Text>{counter}</Text>
        </View>
    )
}

export default CartScreen

const styles = StyleSheet.create({})
