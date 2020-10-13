
import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Icon, Text, Grid, Col, Row, } from 'native-base'
import { } from 'redux-form'
import _ from 'lodash'
import {LinearGradient} from 'expo-linear-gradient'
import { Actions } from 'react-native-router-flux'


export default class LoginScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            password: ''
        }
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
                            onPress={() => this.WritePass(null)}
                        >
                            <Icon name='backspace' style={{ fontSize: 30, color: '#FFF' }} />
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
                onPress={() => this.WritePass(number)}
            >
                <Text style={styles.button_text}> {number}</Text>
            </TouchableOpacity>
        )
    }

    WritePass(number) {
        let pass = this.state.password;
        if (number) {
            pass.length < 4 ? pass = pass + number.toString() : null
        } else {
            pass.length > 0 ? pass = pass.substring(0, pass.length - 1) : null
        }
        console.log(pass)
        this.setState({ password: pass });
    }

    renderPassword() {
        const dots = [null, null, null, null]
        _.map(this.state.password, ((char, index) => {
            dots[index] = char;
        }))
        if(this.state.password.length >= 4 ){
            Actions.home()
        }
        return (
            <View style={styles.password}>
                {
                    dots.map((dot, index) => {
                        return dot === null
                            ? <Text key={index} style={styles.password_text}>{'_'}</Text>
                            : <Text key={index} style={styles.password_text}>{'*'}</Text>
                    })
                }
            </View>
        )
    }

    render() {
        const { name } = this.props;
        return (
            <LinearGradient
            colors={['#5045cd', '#2fa5ed']}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            style={styles.body}
            >
                <Icon name='arrow-back' style={styles.icon} />
                <Text style={styles.text}>Hola {name}</Text>
                <Text style={styles.sub_text}>introduce tu pin para ingresar</Text>
                {this.renderPassword()}
                {this.renderKeyboard()}

            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        width: '100%',
        height: '100%',
        backgroundColor: 'blue',
        paddingTop: 30,
        paddingHorizontal: 30,
        paddingBottom: 30
    },
    icon: {
        fontSize: 30,
        color: '#FFF'
    },
    text: {
        fontSize: 35,
        marginTop: 50,
        color: '#FFF',
    },
    sub_text: {
        fontSize: 14,
        color: '#FFF',
    },
    keybaord_container: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    keybaord: {
        height: 290,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    row_keyboard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20
    },
    button: {
        width: 70,
        height: 70,
        borderRadius: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button_text: {
        fontSize: 25,
        color: '#FFF',
    },
    password: {
        flexDirection: 'row',
        marginVertical: 30,
        marginHorizontal: 20,
        justifyContent: 'space-around'
    },
    password_text: {
        color: '#FFF',
        fontSize: 50,
    }
})