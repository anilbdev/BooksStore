import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Button } from '..'

const ListItem = ({title,auther}) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image 
                style={styles.image} 
                source={{ uri: 'https://media.istockphoto.com/photos/vintage-album-cover-texture-frame-for-background-picture-id1297066744' }} />
            </View>
            <View style={styles.detailsContainer}>
                <View style={styles.bookDetails}>
                    <Text style={{fontSize:28}}>{title}</Text>
                    <Text style={{fontSize:20}}>{auther}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button label='Add +' buttonColor='#4a8bcb'/>
                </View>

            </View>
        </View>
    )
}

export default ListItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    imageContainer: {},
    image:{
        height:150,
        width:85
    },
    detailsContainer:{
        justifyContent:'space-between'
    },
    bookDetails:{
        padding:10
    },
    buttonContainer:{}

})
