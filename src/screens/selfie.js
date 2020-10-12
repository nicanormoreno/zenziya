import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Icon, Text, Grid, Col, Row } from 'native-base'
import { Actions } from 'react-native-router-flux';


export default class Selfie extends Component {
    render() {
        return (
            <View style={styles.body}>
                <Icon name='arrow-back' style={styles.icon} />
                <View style={styles.card}>
                    <Text style={styles.title}>Ahora necesitamos que te tomes una Selfie</Text>
                    <Text style={styles.text}>Es para comprobar que tu identidad coincide con la cédula (No lo publicaremos en ningun lado)</Text>

                    <View style={styles.icon_container}>
                        <Icon style={styles.external_icon} type='MaterialIcons' name='crop-free' />
                        <Icon style={styles.internal_icon} type='MaterialIcons' name='person' />
                    </View>
                    <Text style={styles.recomendations}>- Evista usar accesorios en tu rostro</Text>
                    <Text style={styles.recomendations}>- Pon el celular a la antura de los ojos</Text>
                    <Text style={styles.recomendations}>- Busca un lugar silencioso y bien iluminado</Text>
                    <TouchableOpacity style = {styles.button} onPress={()=> Actions.selfieOpenCamera()}>
                        <Text style={styles.button_text}>Siguiente</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    body: {
        marginTop: 35,
        marginTop: 35,
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        paddingTop: 30,
        paddingHorizontal: 30,
        paddingBottom: 30
    },
    icon: {
        fontSize: 30,
        color: '#FFF'
    },
    icon_container: {
        position: 'relative',
        marginVertical: 15,
         height: 230,
        justifyContent: 'center',
        alignItems: 'center'
    },
    external_icon: {
        fontSize: 230,
        color: '#FFF',
        position: 'absolute'
    },
    internal_icon: {
        fontSize: 110,
        color: '#FFF',
        position: 'absolute'
    },
    card: {
        marginTop: 20,
        marginHorizontal: 10
    },
    title: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 25,
        marginBottom: 20,
        textAlign: 'center'
    },
    text: {
        color: '#CCC',
        fontSize: 14,
        textAlign: 'center',
        marginHorizontal: 10
    },
    recomendations: {
        color: '#CCC',
        fontSize: 12,
        marginBottom: 10
    },
    button: {
        marginTop:50,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical:12,
        backgroundColor: 'rgba(255, 170, 255, 0.5)'
    },
    button_text: {
        color: '#FFF',
        fontSize: 16
    }
})