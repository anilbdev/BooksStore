import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { Button } from '..'
import { useDispatch, useSelector } from 'react-redux'
//custom import
import { addToCart, removeFromCart } from '..'
const ListItem = ({ book }) => {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cartReducer)   
    if(!book){
        return null
    }
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: 'https://media.istockphoto.com/photos/vintage-album-cover-texture-frame-for-background-picture-id1297066744' }} />
            </View>
            <View style={styles.detailsContainer}>
                <View style={styles.bookDetails}>
                    <Text style={{ fontSize: 28 }}>{book.title}</Text>
                    <Text style={{ fontSize: 20 }}>{book.auther}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    {/* if book in cart array present in cart? remove :add*/}
                    {cart.includes(book)
                        ? <TouchableOpacity
                            onPress={() => dispatch(removeFromCart(book))}
                        >
                            <Button label='Remove -' buttonColor='orange' />
                        </TouchableOpacity>
                        : <TouchableOpacity
                            onPress={() => dispatch(addToCart(book))}
                        >
                            <Button label='Add +' buttonColor='#4a8bcb' />
                        </TouchableOpacity>}
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
    image: {
        height: 150,
        width: 85
    },
    detailsContainer: {
        justifyContent: 'space-between'
    },
    bookDetails: {
        padding: 10
    },
    buttonContainer: {}
})
