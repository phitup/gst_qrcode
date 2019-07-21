import React, { Component } from 'react';
import {
   StyleSheet,
   Text,
   View,
   Image,
   Button
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

export default class CameraScreen extends Component {
    state = {
      pickedImage: null,
      path: null
      }
      reset = () => {
        this.setState({
          pickedImage: null,
          path: null
      });
    }

    pickImageHandler = () => {
      ImagePicker.showImagePicker({title: "Pick an Image",
      maxWidth: 800, maxHeight: 600}, res => {
         if (res.didCancel) {
            console.log("User cancelled!");
         } else if (res.error) {
            console.log("Error", res.error);
         } else {
            const source = { uri: res.uri };
            // You can also display the image using data:
            // const source = { uri: 'data:image/jpeg;base64,' + response.data };

            this.setState({
               pickedImage: source,
               path: res.uri
            });
         }
      });
   }

   resetHandler = () =>{
      this.reset();
   }

    render() {
        return (
          <View style={styles.container}>
          <Text style={styles.textStyle}>{this.state.path}</Text>
          <View style={styles.placeholder}>
             <Image source={this.state.pickedImage} style={styles.previewImage} />
          </View>
          <View style={styles.button}>

             <Button title="Pick Image" onPress={this.pickImageHandler} />

             <Button title="Reset" onPress={this.resetHandler} />

         </View>
     </View>
        );
    }
}
const styles = StyleSheet.create({
  container: {
     alignItems:"center"
  },
  textStyle: {
     fontWeight:"bold",
     fontSize:10,
     textAlign:"center",
     color:"red",
     marginTop:10
  },
  placeholder: {
     borderWidth: 1,
     borderColor: "black",
     backgroundColor: "#eee",
     width: "70%",
     height: 280,
     marginTop:50,
  },
  button: {
    width: "80%",
    marginTop:20,
    flexDirection:"row",
    justifyContent: "space-around"
  },
  previewImage: {
    width: "100%",
    height: "100%"
  }
});