/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routers from './routers/index';
import FlashMessage from 'react-native-flash-message';

const App = () => {
  return (
    <NavigationContainer>
      <Routers />
      <FlashMessage position="top"/>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
