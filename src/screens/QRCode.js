"use strict";
import React, { Component } from "react";

import { StyleSheet, Text, Alert, View, Button } from "react-native";
import { createStackNavigator, createAppContainer } from 'react-navigation';
import QRCodeScanner from "react-native-qrcode-scanner";

class QRCode extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  
  constructor(props) {
    super(props);
    this.state = {
      dataqr: "",
      status: false
    };
  }

  // onSuccess = (e) => {
  //   Linking
  //     .openURL(e.data)
  //     .catch(err => console.error('An error occured', err));
  // }

  onSuccess(e) {
    this.setState(preStatus => ({
      dataqr: this.state.dataqr + ", " + e.data,
      status: !preStatus.status
    }));
    Alert.alert(
      "QR Code",
      e.data,
      [{ text: "OK", onPress: () => this.scanner.reactivate() }],
      { cancelable: false }
    );
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.conMain}>
        <View style={styles.conHeader}>
          <Text style={styles.textHeader}>[REY1024] Contoh QR Code</Text>
        </View>
        <View style={styles.conQR}>
          <QRCodeScanner
            onRead={this.onSuccess.bind(this)}
            ref={node => {
              this.scanner = node;
            }}
            topContent={
              <View>
                <Text style={styles.centerText}>
                  Silakan klik coba Lagi untuk scan ulang
                </Text>
                <Button 
                  onPress={() => this.props.navigation.navigate('CameraScreen')}
                title="Screen"
                />
              </View>
            }
            bottomContent={
              <View>
                <Text>Code {this.state.dataqr}</Text>
              </View>
            }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  conMain: {
    flex: 1
  },
  conHeader: {
    flex: 1,
    backgroundColor: "#6200EE",
    alignItems: "center",
    justifyContent: "center"
  },
  textHeader: {
    fontSize: 18,
    color: "white"
  },
  conQR: {
    flex: 8,
    padding: 5
  },
  centerText: {
    fontSize: 12,
    color: "#777"
  },
});

export default QRCode;
