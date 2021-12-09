import React from 'react'
import { StyleSheet, Text, View } from 'react-native'



const Button = ({label,buttonColor}) => {
    
    return (
       <View 
       
       style={{...styles.button,backgroundColor:buttonColor}}>
           <Text style={{color:'#fff'}}>{label}</Text>
       </View>
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
