import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import { useDispatch,useSelector } from 'react-redux'
//custom import
import {addToCart,removeFromCart} from '..'

const Button = ({label,buttonColor}) => {
    const dispatch = useDispatch()
    return (
       <TouchableOpacity 
       
       style={{...styles.button,backgroundColor:buttonColor}}>
           <Text style={{color:'#fff'}}>{label}</Text>
       </TouchableOpacity>
    )
}

Button.defaultProps={
    buttonColor:'red',
    label:'Button'
}

export default Button

const styles = StyleSheet.create({
    button:{
        
        borderRadius:10,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:5,
        marginLeft:10
    }
})
