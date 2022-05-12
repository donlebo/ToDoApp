import React from 'react'
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity, Platform, Keyboard } from 'react-native';
import { Octicons } from '@expo/vector-icons'; 

export default function header() {
  return (
    <>
        <View style={styles.container}>
            <Text style={{ color: 'black', fontSize: 25, fontWeight: 'bold'}}>
              Your tasks 
            </Text>
        </View>
        
    </>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 0.1,
      backgroundColor: 'grey',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      paddingTop: 40, 
    },
  });
