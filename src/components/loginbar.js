import React, { Component } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'


export default class LoginBar extends Component {
    render() {
        return (
            <View style={styles.body}>
                <View style={styles.container}>
                    <Text style={styles.text}>Iniciar Sesión</Text>
                    <Text style={styles.text}>Abrir Cuenta</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    body: {
        alignItems:'center',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        marginBottom: 35,
        width: '100%'
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%'
    },
    text: {
        color: '#FFFFFF',
        fontSize: 14
    }
})