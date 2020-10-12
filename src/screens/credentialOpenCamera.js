import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Icon } from 'native-base'
import ExpoCamera from '../components/expoCamera'
import { Camera } from 'expo-camera'



export default class CredentialOpenCamera extends Component {
    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.front,
        pic: null
    };

    getImage(pic) {
        console.log(pic)
    }

    render() {
        return (
            <View style={styles.camera}>
                <ExpoCamera cameraType='back' getImage={this.getImage}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    camera: {
        flex: 1
    }
});

