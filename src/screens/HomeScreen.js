import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
//custom import
import { 
    books,
    ListItem,
    
} from '..';
const HomeScreen = ({ navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity
                    onPress={() => navigation.navigate('Cart')}
                >
                    <Icon name="shopping-cart" size={30} color="#900" />
                </TouchableOpacity>
            )
        })
    }, [navigation])
    return (
        <View>
            <Text>Home Screen</Text>
            <FlatList
                data={books}
                keyExtractor={(book) =>book.auther}
                renderItem={(book) => {
                    return (
                        <ScrollView>
                            <Text>{book.item.title}</Text>
                            <ListItem />
                        </ScrollView>
                    )
                }}
            />
        </View>
    )
}
export default HomeScreen
const styles = StyleSheet.create({})
