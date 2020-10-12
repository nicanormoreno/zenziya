import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Icon } from 'native-base'
import ExpoCamera from '../components/expoCamera'
import { Camera } from 'expo-camera'
import { Actions } from 'react-native-router-flux';



export default class SelfieOpenCamera extends Component {
    constructor(props){
        super(props)
    }
    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.front,
        pic: null
    };

    getImage(pic) {
        console.log('por aca')
        Actions.credentialPicture();
    }

    render() {
        return (
            <View style={styles.camera}>
                <ExpoCamera cameraType='front' getImage={this.getImage.bind(this)}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    camera: {
        flex: 1
    }
});

