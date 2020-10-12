import React, { Component } from 'react'
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native'
import CarouselLayout from './carousel-layout'
import SnapCarousel, {Pagination} from 'react-native-snap-carousel'
import _ from 'lodash'
import LoginBar from './loginbar'

const width = Dimensions.get('window').width;
const hegiht = Dimensions.get('window').height;

export default class Caroulse extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeIndex: 0,
            carouselItems: []
        }
        this.renderItems = this.renderItems.bind(this)
    }

    componentDidMount() {
        const carouselItems = []
        carouselItems.push({
            title: 'Pide tu prestamo',
            text: 'Necesitas dinero? Nostros te lo prestamos. Aplica a tu crédito y recibe tu dinero al instante.',
            img: require('../common/300x300.png')
        })
        carouselItems.push({
            title: 'Pide tu prestamo',
            text: 'Necesitas dinero? Nostros te lo prestamos. Aplica a tu crédito y recibe tu dinero al instante.',
            img: require('../common/300x300.png')
        })
        carouselItems.push({
            title: 'Pide tu prestamo',
            text: 'Necesitas dinero? Nostros te lo prestamos. Aplica a tu crédito y recibe tu dinero al instante.',
            img: require('../common/300x300.png')
        })
        carouselItems.push({
            title: 'Pide tu prestamo',
            text: 'Necesitas dinero? Nostros te lo prestamos. Aplica a tu crédito y recibe tu dinero al instante.',
            img: require('../common/300x300.png')
        })
        this.setState({ carouselItems: carouselItems })
    }


    renderItems({item, index}) {
        const { img, text, title } = item
        console.log(img, title, text)
        return <CarouselLayout
            img={img}
            text={text}
            title={title}
        />
    }

    get pagination () {
        const { carouselItems, activeIndex } = this.state;
        return (
            <Pagination
              dotsLength={carouselItems.length}
              activeDotIndex={activeIndex}
              containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
              dotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  marginHorizontal: 8,
                  backgroundColor: 'rgba(255, 255, 255, 0.98)'
              }}
              inactiveDotStyle={{
                  // Define styles for inactive dots here
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
        );
    }


    render() {
        const { carouselItems } = this.state
        return (
            <View style = {styles.carousel}>
                {
                    !_.isEmpty(carouselItems)
                        ? <SnapCarousel
                        style = {styles.carousel}
                            layout={"default"}
                            autoplay
                            ref={ref => this.carousel = ref}
                            data={carouselItems}
                            sliderWidth={width}
                            itemWidth={width}
                            renderItem={this.renderItems}
                            onSnapToItem={index => this.setState({ activeIndex: index })} />
                        : null
                }
                <Text>HOLA</Text>
                {this.pagination}
              
            {/* <View style = {styles.container}>
                <Text style = {styles.text}>Iniciar Sesión</Text>
                <Text style = {styles.text}>Abrir Cuenta</Text>
            </View> */}
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    carousel: {
        
    },
   container: {
       flexDirection: 'row',
       justifyContent: 'space-around',
       marginBottom: 30,
   },
   text: {
       color: '#FFF',
       fontSize: 14
   }
})