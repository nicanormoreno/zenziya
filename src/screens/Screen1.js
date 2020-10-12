import React, {Component} from 'react'
import {View,Text , StyleSheet} from 'react-native'
import Loginbar from '../components/loginbar'

const color1 = '#16B1E5'
const color2 = '#6133FF'

export default class Screen1 extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Loginbar style = {styles.bar}/> 
        )
    }
}

const styles = StyleSheet.create({
    body: {
        flex:1,
        height: '100%',
        width: '100%'
    },
})