/* eslint-disable prettier/prettier */
/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */
import {ImageBackground, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
// import {Logo} from '../../assets';
import { BoardBackground as bg, Next } from '../../assets';

const OnBoard = ({navigation}) => {

  return (
    <View style={styles.container}>

            <ImageBackground source={bg} style={styles.bg} resizeMode='cover' >
                <TouchableOpacity  activeOpacity={0.5} onPress={()=>navigation.navigate('Home')}>
                    <View style={styles.btn}>
                        <Next/>
                    </View>
                </TouchableOpacity>

                <View style={styles.textWrap}>
                    <Text style={styles.text}>Binggung Mencari Tempat Liburan di Minahasa Utara?</Text>
                    <Text style={styles.text1}>Cari di Wisata Minut Aja!</Text>
                </View>
            </ImageBackground>
        </View>
  );
};

export default OnBoard;

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
  },
  text: {
    fontSize: 58,
    fontFamily: 'Poppins-ExtraBold',
    color: '#2D2D2D',
  },
  text1: {
    fontSize: 23,
    fontFamily: 'Poppins-ExtraBold',
    color: '#2D2D2D',
  },

  btn: {
    marginTop: 32,
    alignSelf: 'flex-end',
    marginRight: 23 ,
  },
});
