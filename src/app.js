import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MainNavigator from "./routers/Router";

class app extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };

    render() {
      return (
        <MainNavigator />
      );
    }
}

export default app;
