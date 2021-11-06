import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Succes from './Components/Succes'
import Detect from './Components/detect'


const Intro = createStackNavigator()

function MyStack() {
  return(
    <NavigationContainer>
      <Intro.Navigator
      initialRouteName="Detection"
      screenOptions={{
        headerShown: true
      /*  gestureEnabled: true,
        headerStyle: {
          backgroundColor: 'blue'
        },
        headerTintColor: 'white',
        headerMode: 'float',
        keyboardHandlingEnabled: false*/
      }}>
        <Intro.Screen name="Detection" component={Detect}
          options={{
            headerShown: false
          }}/>
        <Intro.Screen name="Validation" component={Succes}
          options={{
            headerShown: false
          }}/>
      </Intro.Navigator>
    </NavigationContainer>
   )
}
