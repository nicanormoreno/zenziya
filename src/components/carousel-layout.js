import React, {Component} from 'react'
import {View, Image, Text, StyleSheet } from 'react-native'


export default class CarouselLayout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text:null, 
            title: null,
            img:null
        };
    }

    componentWillMount(){
        const {img, text, title} = this.props;
        img? this.setState({img: img}) : null;
        text? this.setState({text: text}) : null;
        title? this.setState({title: title}) : null;
    }
    
    render(){
        const {img, title, text} = this.state
        console.log(img, title, text)
        return (
            <View style = {styles.container}>
                {
                    title? <Text style = {styles.title}>{title}</Text> : null
                }
                {
                    img? <Image style = {styles.image} source={img}/> : null
                }
                {
                    text? <Text style = {styles.text}>{text}</Text> : null
                }
            </View>
        )
    }

}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        color: '#FFF',
        fontWeight:'bold'
    },
    text: {
        color: '#FFF',
        fontSize: 16,
    },
    image: { 
        margin: 30,
        resizeMode: 'contain',
        height:210,
    },
    container: {
        width: '78%',
        alignSelf: 'center',
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: 'red'
    }

})