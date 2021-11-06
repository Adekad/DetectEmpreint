import React from 'react';
import { StyleSheet, View, TouchableOpacity, Button, ToastAndroid, ImageBackground, ScrollView, TextInput, Text } from 'react-native'
import Fingerprint from 'react-native-fingerprint-android';

class Detect extends React.Component {

  constructor(props){
    super(props)
    this.var = 1
  }

  _test = () => {
      ToastAndroid.show("Hello word", ToastAndroid.SHORT);
      <Button title="Toast" onPress={() => this._test()}/>
  }

  _essai = () => {
    (async() => {
        const hardware = await Fingerprint.isHardwareDetected();
        const permission = await Fingerprint.hasPermission();
        const enrolled = await Fingerprint.hasEnrolledFingerprints();

        if (!hardware || !permission || !enrolled) {
            let message = !enrolled ? 'No fingerprints registered.' : !hardware ? 'This device doesn\'t support fingerprint scanning.' : 'App has no permission.'
            Toast.show(message, Toast.SHORT);
            return;
        }

        try {
            await Fingerprint.authenticate(warning => {
                Toast.show(`Try again: ${warning.message}`, Toast.SHORT);
            });
        } catch(error) {
            Toast.show(`Authentication aborted: ${error.message}`, Toast.SHORT);
        }

        Toast.show("Auth successful!", Toast.SHORT);
    })()
  }

  render() {
    return(
      <View style={styles.container}>
          <Text style={styles.text_input}>Hello Word</Text>
          {this._essai()}
      </View>
    )
  }

}



const styles = StyleSheet.create({
  container: {
  flex: 1,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  },

  text_input: {
    width:'80%',
    height: '100%',
    paddingLeft: 10,
    borderColor: 'black',
    borderRadius: 10,
    //backgroundColor: 'black',
    fontSize: 16
    //fontFamily: 'Impact',
  },
})

export default Detect