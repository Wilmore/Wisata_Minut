/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import {ImageBackground, ScrollView, StyleSheet, Text, View, Image, Linking, TouchableOpacity} from 'react-native';
import React from 'react';
import {HomeButton, GunungKlabatView as GK, GunungKlabatView} from '../../assets';
import { Button, Gap } from '../../components';

const GKlabatView = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <Image source={GK} resizeMode='cover'/>
      <Text style={styles.Text1}>Gunung Klabat</Text>

         <View style={styles.btn}>
          <Button title="Akomodasi" style={{padding: 50}} onPress={()=>navigation.navigate('DefaultAkomodasi')}/>
          <Button title="Lokasi" onPress={ ()=>{ Linking.openURL('https://www.google.com/maps/place/Mount+Klabat/@1.4533332,125.0133237,14z/data=!3m1!4b1!4m5!3m4!1s0x32870899ab94ac11:0xdfe4a13506f9ed5e!8m2!3d1.4533333!4d125.0308333')}} />
        </View>
      <View style={styles.Wrapper1}>
        <Gap height={20} />
        <Text style={styles.TextNotes}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est."
        </Text>
      </View>

      <Text style={styles.texttitle1}>Harga Masuk</Text>
      <View style={styles.Wrapper2}>
        <Text>Per/Orang</Text>
        <View style={styles.backround}>
          <Text style={styles.textprice}>Gratis</Text>
        </View>
        <View style={styles.homepress}>
          <TouchableOpacity activeOpacity={0.6} onPress={()=>navigation.navigate('Home')}>
            <HomeButton />
          </TouchableOpacity>
        </View>
      </View>

    </ScrollView>
  );
};

export default GKlabatView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  Text1: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    color: 'black',
    padding: 15,
  },
  TextNotes: {
    fontFamily:'Poppins-Regular',
    color: 'black',
    textAlign: 'center',
  },
  Wrapper1: {
    paddingTop: 10,
    paddingHorizontal: 40,
  },
  Wrapper2:{
    flexDirection: 'row',
    paddingHorizontal: 30,
    paddingTop: 1,
    alignItems: 'center',
  },
  backround:{
    height: 45,
    width: 90,
    backgroundColor: '#65FA31',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginLeft: 40,
  },
  textprice: {
    color : 'black',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  },
  texttitle1: {
    fontFamily: 'Poppins-Bold',
    fontSize: 25,
    marginLeft: 20,
    marginTop: 10,
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  homepress:{
    position: 'absolute',
    bottom: 2,
    left: 300,
  },
});
