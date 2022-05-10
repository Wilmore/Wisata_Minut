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
  PantaiPall as PP,
  PantaiTumpa as PT,
  PantaiMangket as PM,
  PantaiPulisan as PPV,
  PulauGanga as PG,
} from '../../assets';

const WisataPantai = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header onBack={() => navigation.goBack()}/>
      <Text style={styles.TextTitle}>Wisata Gunung</Text>
        <ScrollView style={styles.Wrapper} showsVerticalScrollIndicator={false}>
          {/* Pantai Pall */}
            <TouchableOpacity style={{flexDirection:'row', marginTop: 25}} onPress={()=>navigation.navigate('PallView')} >
              <Image source={PP} resizeMode='cover' />
            </TouchableOpacity>


            {/* Pantai Tumpa*/}
            <TouchableOpacity style={{flexDirection:'row', marginTop: 25}} onPress={()=>navigation.navigate('PantaiTumpaanView')} >
              <Image source={PT} resizeMode='cover' />
            </TouchableOpacity>

            {/* Pantai Mangket*/}
            <TouchableOpacity style={{flexDirection:'row', marginTop: 25}} onPress={()=>navigation.navigate('PMangketView')} >
              <Image source={PM} resizeMode='cover' />
            </TouchableOpacity>

            {/* Pantai Pulisan*/}
            <TouchableOpacity style={{flexDirection:'row', marginTop: 25}} onPress={()=>navigation.navigate('PantaiPulisanView')} >
              <Image source={PPV} resizeMode='cover' />
            </TouchableOpacity>

            {/* Default Richard*/}
            <TouchableOpacity style={{flexDirection:'row', marginTop: 25}} onPress={()=>navigation.navigate('PulauGangaViewPage')} >
              <Image source={PG} resizeMode='cover' />
            </TouchableOpacity>
        </ScrollView>
    </View>
  )
}

export default WisataPantai;

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