import React, {Component} from 'react'
import {View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import {Icon, Text} from 'native-base'
import { Actions } from 'react-native-router-flux';


export default class CredentialPicture extends Component {
    render() {
        return (
            <View style={styles.body}>
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
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text:{
        fontSize:21,
        color:'#FFF',
        textAlign:'center',
        marginVertical: 20
    },
    icon: {
        fontSize: 30,
        color: '#FFF'
    },
    image: {
        resizeMode: 'cover',
        width: '100%',
        height: 200,
        marginBottom: 30
    },
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
    card: {
        marginTop: 20,
        marginHorizontal: 10
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