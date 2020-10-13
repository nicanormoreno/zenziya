import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Icon } from 'native-base'
import * as Animatable from 'react-native-animatable'
import {LinearGradient} from 'expo-linear-gradient'
import { Actions } from 'react-native-router-flux';
import L from '../common/Layout'



export default class ContactsSolicitude extends Component {
    
    render() {
        return (
            <View style={styles.body}>
                <LinearGradient
                    colors={['#5045cd', '#2fa5ed']}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.card}
                >
                    <TouchableOpacity>
                        <Icon name='arrow-back' style={styles.icon} />
                    </TouchableOpacity>
                    <Text style={styles.text}>Encuentra tus contactos más rápido aceptando el acceso a la agenda</Text>
                    <View style={styles.button_container}>
                        <TouchableOpacity style={styles.button} onPress={() => Actions.login()}>
                            <Text style={styles.button_text}>Permitir Acceso</Text>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    body: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    card: {
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        backgroundColor: 'blue',
        width: '100%',
        minHeight: '50%',
        padding: 30
    },
    icon: {
        fontSize: 40,
        color: '#FFF'
    },
    button: {
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: 20,
    },
    button_container: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 10
    },
    button_text: {
        fontSize: 14,
        color: '#FFF',
        marginVertical: 7
    },
    text: {
        marginHorizontal: 15,
        marginTop: 30,
        fontSize: L.h(18),
        color: '#FFF'
    }
})