import React from 'react';
import { StyleSheet, View, TouchableOpacity, Button, ImageBackground, FlatList, ScrollView, TextInput, Text } from 'react-native'

class Succes extends React.Component {

  render() {
    return(
      <View style={styles.container}>
            <Text>Hello WORLD</Text>
          </View>

    )
  }

}
/*Deplacer textinput dans flatlist et flatlist prend 100% 100% mais new mes reste*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Succes
