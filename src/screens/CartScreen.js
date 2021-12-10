import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
//custom import
import {
    increment,
    decrement,
    ListItem,
    removeFromCart,
    Button
} from '..'
const renderCartList = (book) => {
    return (
        <View style={styles.cartListContainer}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: 'https://media.istockphoto.com/photos/vintage-album-cover-texture-frame-for-background-picture-id1297066744' }} />
            </View>
            <View style={styles.detailsContainer}>
                <View style={styles.bookDetails}>
                    <Text style={{ fontSize: 28 }}>{book.item.title}</Text>
                    <Text style={{ fontSize: 20 }}>{book.item.auther}</Text>
                </View>
                <View style={styles.buttonContainer}>
                </View>
            </View>
        </View>
    )
}
const CartScreen = () => {
    const cart = useSelector((state) => {
        return state.cartReducer
    })
    const dispatch = useDispatch()
    return (
        <View style={styles.container}>
            {
                cart.length !== 0
                    ?
                    <View style={styles.listItemContainer}>
                        <FlatList
                            data={cart}
                            keyExtractor={cart => cart.title}
                            renderItem={(book) => renderCartList(book)}
                        />
                    </View>
                    : <View style={styles.emptyCartTextContainer}>
                        <Text style={styles.emptyCartText}>Your Cart is Empty!</Text>
                    </View>}
        </View>
    )
}
export default CartScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 2
    },
    listItemContainer: {
        padding: 15
    },
    cartListContainer: {
        flexDirection: 'row',
        marginVertical: 15
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
    emptyCartTextContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    emptyCartText: {
        fontSize:26
      
    }
})
