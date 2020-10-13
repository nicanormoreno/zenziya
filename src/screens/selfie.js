import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView} from 'react-native'
import { Icon, Text } from 'native-base'
import {responsiveFontSize as rf, responsiveHeight as rh, responsiveScreenWidth as rw} from 'react-native-responsive-dimensions'
import L from '../common/Layout'
import { Actions } from 'react-native-router-flux';


export default class Selfie extends Component {
    render() {
        return (
            <View style={{flex:1}}>
            <ScrollView style={styles.body}>
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
            </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    body: {
        flex:1,
        width: '100%',
        backgroundColor: 'black',
        paddingTop: L.h(30),
        paddingHorizontal: L.h(30),
        paddingBottom: L.h(300)
    },
    icon: {
        fontSize: L.h(30),
        color: '#FFF'
    },
    icon_container: {
        position: 'relative',
        marginVertical: L.h(10),
        height: L.h(230),
        justifyContent: 'center',
        alignItems: 'center'
    },
    external_icon: {
        fontSize: L.h(230),
        color: '#FFF',
        position: 'absolute'
    },
    internal_icon: {
        fontSize: L.h(110),
        color: '#FFF',
        position: 'absolute'
    },
    card: {
        marginTop: L.h(16),
        marginHorizontal: L.h(8),
        justifyContent:'center'
    },
    title: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: L.h(20),
        marginBottom: L.h(20),
        textAlign: 'center'
    },
    text: {
        color: '#CCC',
        fontSize: L.h(12),
        textAlign: 'center',
        marginHorizontal: L.h(8)
    },
    recomendations: {
        color: '#CCC',
        fontSize: L.h(12),
        marginBottom: L.h(6)
    },
    button: {
        marginTop:L.h(30),
        borderRadius: L.h(20),
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical:L.h(6),
        backgroundColor: 'rgba(255, 170, 255, 0.5)'
    },
    button_text: {
        color: '#FFF',
        fontSize: L.h(12)
    }
})