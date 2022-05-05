/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  SignIn,
  SignUp,
  SplashScreen,
  Home,
  OnBoard,
  RaewayaView,
  RaewayaAkomodasi,
  DefaultView,
  DefaultAkomodasi,
} from '../pages';


const Stack = createNativeStackNavigator();

const index = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OnBoard"
        component={OnBoard}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RaewayaView"
        component={RaewayaView}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RaewayaAkomodasi"
        component={RaewayaAkomodasi}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DefaultView"
        component={DefaultView}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DefaultAkomodasi"
        component={DefaultAkomodasi}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default index;
