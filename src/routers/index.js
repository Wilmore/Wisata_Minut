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
  PantaiTumpaanAkomodasi,
  PantaiTumpaanView,
  GTumpaView,
  PallAkomodasi,
  PallView,
  GKlabatView,
  PMangketView,
  KakiDianView,
  PantaiPulisanView,
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
      <Stack.Screen
        name="PantaiTumpaanView"
        component={PantaiTumpaanView}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="PantaiTumpaanAkomodasi"
        component={PantaiTumpaanAkomodasi}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="GTumpaView"
        component={GTumpaView}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PallView"
        component={PallView}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PallAkomodasi"
        component={PallAkomodasi}
        options={{headerShown: false}}
      />
      
      <Stack.Screen
        name="GKlabatView"
        component={GKlabatView}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PMangketView"
        component={PMangketView}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="KakiDianView"
        component={KakiDianView}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="PantaiPulisanView"
        component={PantaiPulisanView}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AirTerjunView"
        component={AirTerjunView}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PulauGangaView"
        component={PulauGangaView}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GangaAkomodasi"
        component={GangaAkomodasi}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default index;
