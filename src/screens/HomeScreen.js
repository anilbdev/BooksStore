import React, { useLayoutEffect, } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
//custom import
import {
    books,
    ListItem,
} from '..';
const HomeScreen = ({ navigation }) => {
    const cart = useSelector(state => state.cartReducer)
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity
                    style={styles.cartButtonContainer}
                    onPress={() => navigation.navigate('Cart')}
                >
                    <Icon name="shopping-cart" size={30} color="#900" />
                    {cart.length > 0
                        ? <View style={styles.cartCount}>
                            <Text style={styles.cartCountText}>{cart.length}</Text>
                        </View>
                        :null}

                </TouchableOpacity>
            )
        })
    }, [navigation, cart])
    return (
        <View style={styles.container}>
            <FlatList
                data={books}
                keyExtractor={(book) => book.auther}
                renderItem={(book) => {
                    return (
                        <View style={styles.listItemContainer}>
                            <ListItem
                                book={book.item}
                            />
                        </View>
                    )
                }}
            />
        </View>
    )
}
export default HomeScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 2
    },
    listItemContainer: {
        padding: 15
    },
    cartButtonContainer: {
        position: 'relative'
    },
    cartCount: {
        height: 30,
        width: 30,
        borderRadius: 15,
        backgroundColor: 'green',
        position: 'absolute',
        marginLeft: -15,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    cartCountText: {
    }
})
