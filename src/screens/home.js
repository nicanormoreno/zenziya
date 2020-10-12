import React, { Component } from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Icon, Text } from 'native-base'
import { LinearGradient } from 'expo-linear-gradient'
import { Actions } from 'react-native-router-flux';

export default class Home extends Component {
    state = {
        balance: 18.269
    };

    renderCard() {
        return (
        <TouchableOpacity 
        style={styles.card}
        onPress={() => Actions.transfer()}
        >
            <Text style={{ fontSize: 14 }}>Pide un Prestamo</Text>
            <Image style={{ height: 80, width: 90, resizeMode: 'contain' }} source={require('../common/people.png')} />
        </TouchableOpacity>
        )
    }

    renderCarrousel() {
        return (
            <View
                style={styles.carousel}
                
            >
                <View>
                    <Text style={styles.carousel_text}>Recarga</Text>
                    <Text style={styles.carousel_text}>$ 1000</Text>
                    <Text style={styles.carousel_text}>B71Q7396</Text>
                </View>
                <Image stryle={{ height: 70, width: 70, resizeMode: 'contain' }} source={require('../common/movistar.png')} />
            </View>
        )
    }
    render() {
        const { balance } = this.state;
        return (
            <View style={styles.body}>
                <LinearGradient
                    colors={['#5045cd', '#2fa5ed']}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.header} >
                    <View>
                        <Icon type='MaterialIcons' name='notifications' style={styles.icon} />
                    </View>
                    <View>
                        <Text style={[styles.header_text, { fontWeight: 'bold' }]}>Total Balance</Text>
                        <Text style={styles.header_import}>$ {balance}</Text>
                        <Icon type='MaterialIcons' name='expand-more' style={styles.header_icon} />
                    </View>
                    <View style={{ height: 50, width: 50 }}>
                        <Text>QR</Text>
                    </View>
                </LinearGradient>
                <View>
                    {this.renderCarrousel()}
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 15 }}>
                    {this.renderCard()}
                    {this.renderCard()}
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 15 }}>
                    {this.renderCard()}
                    {this.renderCard()}
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 15 }}>
                    {this.renderCard()}
                    {this.renderCard()}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    body: {
        marginTop: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(200, 200, 200, 0.78)'
    },
    header: {
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: 'flex-start',
        backgroundColor: 'blue',
        width: '100%',
        paddingTop: 60,
        paddingBottom: 20,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    },
    card: {
        borderRadius: 20,
        backgroundColor: '#FFF',
        height: 130,
        width: 130,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    icon: {
        textAlign: 'center',
        color: '#FFF',
        fontSize: 30,
    },
    header_icon: {
        color: '#FFF',
        fontSize: 30,
        textAlign: 'center'
    },
    header_import: {
        color: '#FFF',
        fontSize: 28,
        textAlign: 'center'
    },
    header_text: {
        color: '#FFF',
        fontSize: 12,
        textAlign: 'center'
    },
    header_image: {
        resizeMode: 'contain',
        height: 50,
        width: 50
    },
    carousel: {
        flexDirection: 'row',
        borderRadius: 10,
        padding: 10,
        margin: 20,
        paddingRight: 40,
        backgroundColor: '#89d24e',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    carousel_text: {
        color: '#FFF',
        fontSize: 18,
        marginVertical: 2,
        marginHorizontal: 8
    }
})
