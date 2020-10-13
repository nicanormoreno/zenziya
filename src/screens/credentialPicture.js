import React, {Component} from 'react'
import {View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import {Icon, Text} from 'native-base'
import { Actions } from 'react-native-router-flux';
import L from '../common/Layout'


export default class CredentialPicture extends Component {
    render() {
        return (
            <View style={styles.body}>
                <ScrollView>
                 <Icon name='arrow-back' style={styles.icon} />
                 <View style={styles.card}>
                     <Text style={styles.text}>Encuadra el frente de tu cédula con el recuadro</Text>
                     <View>
                         <Image style={styles.image} source={require('../common/cedula.jpg')} />
                     </View>
                     <Text style={styles.text}>Enfoca tocando la imagen</Text>
                     <Text style={styles.text}>Asegurate de que el texto sea legible y la imagen sea clara</Text>
                 </View>
                 <TouchableOpacity style = {styles.button} onPress={()=> Actions.credentialOpenCamera()}>
                        <Text style={styles.button_text}>Siguiente</Text>
                    </TouchableOpacity>
                    </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text:{
        fontSize:L.h(16),
        color:'#FFF',
        textAlign:'center',
        marginVertical: L.h(16)
    },
    icon: {
        fontSize: 30,
        color: '#FFF'
    },
    image: {
        resizeMode: 'cover',
        width: '100%',
        height: L.h(200),
        marginBottom: L.h(30)
    },
    body: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        paddingTop: 30,
        paddingHorizontal: 30,
        paddingBottom: 30
    },
    card: {
        marginTop: 20,
        marginHorizontal: 10
    },
    button: {
        marginTop:L.h(30),
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical:L.h(8),
        backgroundColor: 'rgba(255, 170, 255, 0.5)'
    },
    button_text: {
        color: '#FFF',
        fontSize: L.h(14)
    }
})