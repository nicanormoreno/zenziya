import React from 'react'
import {
    ActionConst,
    Scene,
    Router
} from 'react-native-router-flux'
import ContactsSolucitude from './screens/contactsSolicitude'
import Login from './screens/loginScreen'
import Selfie from './screens/selfie'
import CredentialPicture from './screens/credentialPicture'
import SelfieOpenCamera from './screens/selfieOpenCamera'
import CredentialOpenCamera from './screens/credentialOpenCamera'
import Home from './screens/home'
import Transfer from './screens/transfer'

const onBackAndroid = () => {
    console.log(
        ' >>>>>>>>>> Actions.currentScene',
        Actions.currentScene,
        this.props.screen.index,
    );
};

export default RouterComponent = () => {
    return (
        <Router backAndroidHandler={onBackAndroid}>
            <Scene key="root" hideNavBar>
                <Scene key="selfie" component={Selfie} />
                <Scene key="selfieOpenCamera" component={SelfieOpenCamera} />
                <Scene key="credentialPicture" component={CredentialPicture} />
                <Scene key="credentialOpenCamera" component={CredentialOpenCamera} />
                <Scene key="contactsSolucitude" component={ContactsSolucitude} />
                <Scene key="login" component={Login} />
                <Scene key="home" component={Home} />
                <Scene key="transfer" component={Transfer} />
            </Scene>
        </Router>
    )
}