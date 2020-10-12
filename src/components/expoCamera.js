import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Icon } from 'native-base'
import ExpoCamera from '../components/expoCamera'
import { Camera } from 'expo-camera'



export default class SelfieOpenCamera extends Component {
    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.front,
        pic: null
    };

    componentDidMount() {
        const { cameraType } = this.props;
        if (cameraType === 'front')
            this.setState({ type: Camera.Constants.Type.front })
        else this.setState({ type: Camera.Constants.Type.back })
    }

    render() {
        const {getImage} = this.props;
        return (
            <View style={styles.camera}>
                <Camera
                    style={{ flex: 1 }}
                    type={this.state.type}
                    ref={ref => {
                        this.camera = ref;
                    }}>
                    <View style={styles.button_container}>
                        <Icon type='MaterialIcons' name='crop-free' style={styles.interface} />
                    </View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            this.camera.takePictureAsync().then(pic => {
                                getImage(pic);
                            })
                        }}>
                        <Icon type='MaterialIcons' name='camera-alt' style={styles.button_icon} />
                    </TouchableOpacity>
                </Camera>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    camera: {
        flex: 1
    },
    crop: {
        color: 'rgba(230, 230, 230, 0.7)',
        fontSize: 350,
        fontWeight: '100',
        alignSelf: 'center',
        marginBottom: 50
    },
    button: {
        width: 80,
        height: 80,
        borderColor: 'rgba(230, 230, 230, 0.7)',
        borderWidth: 2,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 40
    },
    button_container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    button_icon: {
        color: 'rgba(230, 230, 230, 0.7)',
        fontSize: 30
    },
    interface: {
        color: 'rgba(230, 230, 230, 0.7)',
        fontSize: 300,
        alignSelf: 'center'
    }
});

