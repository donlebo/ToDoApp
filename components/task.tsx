import React, { FC } from 'react'
import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


type TaskProps = { text: string };
const Task :FC<TaskProps> = ({ text }: TaskProps) => {

    return (
        <>
            <View style={styles.item}>
                <View style={styles.itemLeft}>
                    <MaterialCommunityIcons name="playlist-check" size={30} color="green" style={{opacity: 0.4, marginRight: 5}} />
                    <Text style={styles.itemText}> {text} </Text>
                </View>
                <View>
                    <AntDesign name="delete" size={24} color="red" style={{ opacity: 0.4 }} />
                </View>

            </View>
            <TextInput style={styles.item} placeholder={'Write a description'} />
        </>
        
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: 'grey',
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%',
        color: 'black',
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: 'red',
        borderWidth: 2,
        borderRadius: 5,
        opacity: 0.4
    },
});

export default Task;
