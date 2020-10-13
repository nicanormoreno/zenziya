import React, {Component} from 'react'
import {View, Image, Text, StyleSheet} from 'react-native'
import {Grid, Col, Row} from 'native-base'
import {LinearGradient} from 'expo-linear-gradient'
import { render } from 'react-dom'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default farewell = () =>{
        return(
            <LinearGradient 
            colors={['#5045cd', '#2fa5ed']}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            style={styles.body}
            >
                <View style= {styles.header}>
                    <Text style={styles.boldText}>Gracias por operar con</Text>
                </View>
                <View style= {styles.logo}>
                    <Image source={require('../common/zenziya.png')} style={styles.image}/>
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity>
                        <Text style = {styles.text}>Iniciar Seción</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Text style = {styles.text}>Abrir cuenta</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        )  
}

const styles = StyleSheet.create({
    body:{
        flex:1,
        flexDirection:'column',
        paddingVertical:'10%'
    },
    header:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
        
    },
    logo: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:100
    },
    footer: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-around'
    },
    boldText:{
        fontSize: 14,
        color: '#FFF',
        fontWeight:'bold',
    },
    text:{
        fontSize: 12,
        color: '#FFF',
    },
    image: {
        width:'100%',
        resizeMode:'contain',
    }
})