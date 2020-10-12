import React, { Component, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Icon } from 'native-base'
import { Camera } from 'expo-camera'



export default class SelfieOpenCamera extends Component {
    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.front,
        pic: null
    }

    async componentDidMount() {
        const { cameraType } = this.props;
        if (cameraType === 'front')
            this.setState({ type: Camera.Constants.Type.front })
        else this.setState({ type: Camera.Constants.Type.back })

        await Camera.requestPermissionsAsync().then(({ status }) => {
            this.setState({ hasCameraPermission: status === 'granted' });
        })
    }

    callbackImage(pic){
        this.props.getImage(pic)
    }

    render() {
        const { getImage } = this.props;
        const { hasCameraPermission } = this.state;
        if (!hasCameraPermission) {
            return <View />
        } else if (hasCameraPermission === 'false') {
            return <Text> NO Camera Acces</Text>
        } else {
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
                                let pic = this.camera.takePictureAsync()
                                this.callbackImage(pic);
                            }}>
                            <Icon type='MaterialIcons' name='camera-alt' style={styles.button_icon} />
                        </TouchableOpacity>
                    </Camera>
                </View>
            )
        }
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

