import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Icon } from 'native-base'
import ExpoCamera from '../components/expoCamera'
import { Camera } from 'expo-camera'
import { Actions } from 'react-native-router-flux';




export default class CredentialOpenCamera extends Component {
    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.front,
        pic: null
    };

    getImage(pic) {
        Actions.contactsSolucitude();
    }

    render() {
        return (
            <View style={styles.camera}>
                <ExpoCamera cameraType='back' getImage={this.getImage.bind(this)}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    camera: {
        flex: 1
    }
});

