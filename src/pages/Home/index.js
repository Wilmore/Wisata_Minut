/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import {ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, ImageBackground} from 'react-native';
import React from 'react';
import {LogoHome, LogoKementrian, LogoMinut, Profil} from '../../assets/icons';
import { ButtonHome, Gap } from '../../components/atoms';
import {
  HomeBackround as HB,
  HomeDefault as HD,
  Raewaya as RW,
  PantaiPall as PP,
  PantaiTumpa as PT,
  GunungTumpa as GT,
  GunungKlabat as GK,
  PantaiMangket as PM,
  Kakidian as KD,
  PantaiPulisan as PPV,
  AirTerjunTunan as ATT,
  PulauGanga as PG,
} from '../../assets';


const Home = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <ImageBackground source={HB} resizeMode='cover'>
          <View style={styles.Wrapper1}>
            <Profil />
            <Text style={styles.Text1}>John Doe</Text>
            <Gap width={55}/>
            <LogoHome/>
          </View>

      <View style={styles.Wrapper2}>
        <View style={{justifyContent:'center', marginLeft: 30}}>
          <Text style={styles.Text2}>Jalan-Jalan </Text>
          <Text style={styles.Text2}>Yuk Hari Ini! </Text>
        </View>
        <Gap width={50} />
        <LogoKementrian/>
        <View style={{marginTop:14, marginRight:15}}>
          <LogoMinut/>
        </View>
      </View>
      </ImageBackground>

      <View style={styles.Wrapper3}>
        <View style={styles.Wrapper4}>
          <Text style={styles.Text3}>Wisata Gunung</Text>
          <View style={{marginLeft: 155, marginTop: 4}}>
            <ButtonHome title="Lihat Semua" onPress={()=>navigation.navigate('WisataGunung')}/>
          </View>
        </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{flexDirection: 'row', margin: 15}}>

            {/* Raewaya Perkins */}
            <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>navigation.navigate('RaewayaView')} >
              <Image source={RW} resizeMode='cover' />
            </TouchableOpacity>



            {/* Gunung Tumpa*/}
            <TouchableOpacity style={{flexDirection:'row', marginLeft: 15}} onPress={()=>navigation.navigate('GTumpaView')} >
              <Image source={GT} resizeMode='cover' />
            </TouchableOpacity>



            {/* Gunung Klabat */}
            <TouchableOpacity style={{flexDirection:'row', marginLeft: 15}} onPress={()=>navigation.navigate('GKlabatView')} >
              <Image source={GK} resizeMode='cover' />
            </TouchableOpacity>



            {/* Default Marchel*/}
            <TouchableOpacity style={{flexDirection:'row', marginLeft: 15}} onPress={()=>navigation.navigate('KakiDianView')} >
              <Image source={KD} resizeMode='cover' />
            </TouchableOpacity>



            {/* Air Terjun Tunan*/}
            <TouchableOpacity style={{flexDirection:'row', marginLeft: 15}} onPress={()=>navigation.navigate('AirTerjunView')} >
              <Image source={ATT} resizeMode='cover' />
            </TouchableOpacity>

            {/* Air Terjun Tunan*/}
            <TouchableOpacity style={{flexDirection:'row', marginLeft: 15}} onPress={()=>navigation.navigate('AirTerjunView')} >
              <Image source={HD} resizeMode='cover' />
            </TouchableOpacity>

          </View>
        </ScrollView>
      </View>

      <View style={styles.Wrapper3}>
        <View style={styles.Wrapper4}>
          <Text style={styles.Text3}>Wisata Pantai</Text>
          <View style={{marginLeft: 155, marginTop: 4}}>
            <ButtonHome title="Lihat Semua" onPress={()=>navigation.navigate('WisataPantai')}/>
          </View>
        </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{flexDirection: 'row', marginTop: 10}}>

             {/* Default Richard*/}
            <TouchableOpacity style={{flexDirection:'row', marginLeft: 15}} onPress={()=>navigation.navigate('PulauGangaViewPage')} >
              <Image source={PG} resizeMode='cover' />
            </TouchableOpacity>

            {/* Pantai Tumpa*/}
            <TouchableOpacity style={{flexDirection:'row', marginLeft: 15}} onPress={()=>navigation.navigate('PantaiTumpaanView')} >
              <Image source={PT} resizeMode='cover' />
            </TouchableOpacity>

            {/* Pantai Mangket*/}
            <TouchableOpacity style={{flexDirection:'row', marginLeft: 15}} onPress={()=>navigation.navigate('PMangketView')} >
              <Image source={PM} resizeMode='cover' />
            </TouchableOpacity>

            {/* Pantai Pulisan*/}
            <TouchableOpacity style={{flexDirection:'row', marginLeft: 15}} onPress={()=>navigation.navigate('PantaiPulisanView')} >
              <Image source={PPV} resizeMode='cover' />
            </TouchableOpacity>

            {/* Pantai Pall */}
            <TouchableOpacity style={{flexDirection:'row', marginLeft: 15}} onPress={()=>navigation.navigate('PallView')} >
              <Image source={PP} resizeMode='cover' />
            </TouchableOpacity>

          </View>
        </ScrollView>
      </View>

    </ScrollView>
  );
};


export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  Wrapper1: {
    flexDirection:'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 50,
    justifyContent: 'center',
  },

  Wrapper2:{
    height: 95,
    borderRadius: 15,
    marginBottom: 15,
    flexDirection: 'row',
  },

   Wrapper3: {
    alignItems: 'flex-start',
    paddingHorizontal:2,
    paddingTop: 10,
    marginTop: 20,
  },
  Wrapper4:{
    flexDirection: 'row',
  },
  text : {
    fontFamily: 'Italianno',
    color: '#3D813B',
    fontSize: 30,
  },

  Text1: {
    fontFamily: 'Poppins-Medium',
    color: 'white',
    fontSize: 30,
  },

  Text2: {
    fontFamily: 'Poppins-Regular',
    color: 'white',
    fontSize: 20,
  },

  Text3: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    marginLeft: 20,
    color: 'black',
  },
  Text4:{
    fontFamily: 'Poppins-Medium',
    justifyContent: 'center',
    alignSelf:'center',
    left: 155,
    fontSize: 12,
    textDecorationLine: 'underline',
    marginTop: 2,
    },
});