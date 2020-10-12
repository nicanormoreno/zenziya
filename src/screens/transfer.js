import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Icon, Text, Grid, Row, Col } from 'native-base'
import _ from 'lodash'
import * as Device from 'expo-device'
import { LinearGradient } from 'expo-linear-gradient'

export default class Transfer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            amount: ''
        }
        console.log('-brand:  ', Device.brand)
        console.log('-manufacturer:  ', Device.manufacturer)
        console.log('-modelName:  ', Device.modelName)
        console.log('-modelId:  ', Device.modelId)
        console.log('-designName:  ', Device.designName)
        console.log('-productName:  ', Device.productName)
        console.log('-deviceYearClass:  ', Device.deviceYearClass)
        console.log('-totalMemory:  ', Device.totalMemory)
        console.log('-supportedCpuArchitectures:  ', Device.supportedCpuArchitectures)
        console.log('-osName:  ', Device.osName)
        console.log('-osVersion:  ', Device.osVersion)
        console.log('-osBuildId:  ', Device.osBuildId)
        console.log('-osInternalBuildId:  ', Device.osInternalBuildId)
        console.log('-osBuildFingerprint:  ', Device.osBuildFingerprint)
        console.log('-platformApiLevel:  ', Device.platformApiLevel)
        console.log('-deviceName:  ', Device.deviceName)
    }

    renderKeyboard() {
        return (
            <Grid style={{}}>
                <Row>
                    <Col>{this.renderButton(1)}</Col>
                    <Col>{this.renderButton(2)}</Col>
                    <Col>{this.renderButton(3)}</Col>
                </Row>
                <Row>
                    <Col>{this.renderButton(4)}</Col>
                    <Col>{this.renderButton(5)}</Col>
                    <Col>{this.renderButton(6)}</Col>
                </Row>
                <Row>
                    <Col>{this.renderButton(7)}</Col>
                    <Col>{this.renderButton(8)}</Col>
                    <Col>{this.renderButton(9)}</Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col>{this.renderButton(0)}</Col>
                    <Col>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => this.writeAmount(null)}
                        >
                            <Icon name='backspace' style={{ fontSize: 30, color: 'rgb(140,140, 140)' }} />
                        </TouchableOpacity>
                    </Col>
                </Row>
            </Grid>
        )
    }

    renderButton(number) {
        return (
            <TouchableOpacity
                style={styles.button}
                onPress={() => this.writeAmount(number)}
            >
                <Text style={styles.button_text}> {number}</Text>
            </TouchableOpacity>
        )
    }

    writeAmount(number) {
        let amount = this.state.amount;
        if (number) {
             amount = amount + number.toString();
        } else {
            amount.length > 0 ? amount = amount.substring(0, amount.length - 1) : null
        }
        console.log(amount)
        this.setState({ amount: amount });
    }

    render() {
        const { amount } = this.state
        return (
            <View style={styles.body}>
                <LinearGradient
                    style={styles.header}
                    colors={['#5045cd', '#2fa5ed']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 30, marginHorizontal: 20 }}>
                        <Icon style={styles.icon} name='arrow-back' />
                        <Text style={{ color: '#FFF' }} >Enviar a Jorge Seguros</Text>
                        <View></View>
                    </View>
                    <Text style={styles.text}>$ {amount === '' ? '0' : amount}</Text>
                </LinearGradient >
                <View style={{ flex: 1, marginHorizontal: 40, marginVertical: 50 }}>
                    {this.renderKeyboard()}
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    body: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFF'
    },
    icon: {
        fontSize: 30,
        color: '#FFF',
    },
    header: {
        backgroundColor: 'rgb(0,255,0)',
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30
    },
    text: {
        fontSize: 35,
        marginVertical: 30,
        color: '#FFF',
        alignSelf: 'center'
    },
    keybaord: {
        height: 290,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    button: {
        width: 70,
        height: 70,
        borderRadius: 20,
        backgroundColor: 'rgba(200, 200, 200, 0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button_text: {
        fontSize: 25,
        color: 'rgb(140,140, 140)',
    },

})