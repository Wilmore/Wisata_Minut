/* eslint-disable prettier/prettier */
/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Header } from '../../components';
import {
  Raewaya as RW,
  GunungTumpa as GT,
  GunungKlabat as GK,
  Kakidian as KD,
  AirTerjunTunan as ATT,
} from '../../assets';

const WisataGunung = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header onBack={() => navigation.goBack()}/>
      <Text style={styles.TextTitle}>Wisata Gunung</Text>
        <ScrollView style={styles.Wrapper} showsVerticalScrollIndicator={false}>
          {/* Raewaya Perkins */}
            <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>navigation.navigate('RaewayaView')} >
              <Image source={RW} resizeMode='cover' />
            </TouchableOpacity>

            {/* Gunung Tumpa*/}
            <TouchableOpacity style={{flexDirection:'row', marginTop: 25}} onPress={()=>navigation.navigate('GTumpaView')} >
              <Image source={GT} resizeMode='cover' />
            </TouchableOpacity>

            {/* Gunung Klabat */}
            <TouchableOpacity style={{flexDirection:'row', marginTop: 25}} onPress={()=>navigation.navigate('GKlabatView')} >
              <Image source={GK} resizeMode='cover' />
            </TouchableOpacity>

            {/* Default Marchel*/}
            <TouchableOpacity style={{flexDirection:'row', marginTop: 25}} onPress={()=>navigation.navigate('KakiDianView')} >
              <Image source={KD} resizeMode='cover' />
            </TouchableOpacity>

            {/* Air Terjun Tunan*/}
            <TouchableOpacity style={{flexDirection:'row', marginTop: 25}} onPress={()=>navigation.navigate('AirTerjunView')} >
              <Image source={ATT} resizeMode='cover' />
            </TouchableOpacity>
        </ScrollView>
    </View>
  )
}

export default WisataGunung;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'white',
  },
  Wrapper:{
    alignSelf: 'center',
    marginTop: 50,
  },
  TextTitle:{
    fontFamily: 'Poppins-Bold',
    fontSize: 30,
    justifyContent: 'center',
    alignSelf: 'center',
  },
})