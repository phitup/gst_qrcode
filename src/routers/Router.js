import React from "react";
import { createStackNavigator, createAppContainer } from 'react-navigation';
import CameraScreen from "../screens/CameraScreen";
import QRCode from "../screens/QRCode";

const aa = createStackNavigator({
    QRCodeScreen: {
        screen: QRCode
    },
    CameraScreen: {
        screen: CameraScreen
    }
}, {
    initialRouteName: 'QRCodeScreen'
});

const MainNavigator = createAppContainer(aa);
export default MainNavigator;
