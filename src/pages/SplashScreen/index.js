/* eslint-disable react-native/no-inline-styles */
/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
// import {Logo} from '../../assets';
import {SplashScreenBackround as background} from '../../assets/background';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignIn');
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.container}>
            <ImageBackground source={background} style={styles.bg} resizeMode='cover'>
                <View style={styles.textWrap}>
                    <Text style={[styles.text, {alignSelf: 'flex-start'}]}>Wisata</Text>
                    <Text style={[styles.text, {alignSelf: 'flex-end', marginTop: -80}]}>Minut</Text>
                </View>
            </ImageBackground>
        </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    flex:1,
  },
  textWrap:{
    paddingLeft: 31,
    paddingRight: 45,
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 100,
    fontFamily: 'Italianno',
    color: 'white',
  },
});
