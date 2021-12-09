import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { StyleSheet, Text, View,Button } from 'react-native'
//custom import
import {
    increment,
    decrement,
    ListItem
} from '..'


const CartScreen = () => {
    const cart =useSelector((state) =>{
      
        return state.cartReducer})
        console.log('cart SCREEN>>>>>>>>',cart)
    const dispatch = useDispatch()
    return (
        <View>
            <ListItem/>
        </View>
    )
}

export default CartScreen

const styles = StyleSheet.create({})
