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
import { Gap } from '../../components/atoms';
import {
  HomeBackround as HB,
  HomeDefault as HD,
  Raewaya as RW,  // Perkins
                  // Perkins
                  // Richard
                  // Richard
                  // Vallen
                  // Vallen
                  // Wilmore
                  // Wilmore
                  // Marchell
                  // Marchel
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
        <Text style={styles.Text3}>Wisata Gunung</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{flexDirection: 'row', margin: 15}}>

            {/* Raewaya Perkins */}
            <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>navigation.navigate('RaewayaView')} >
              <Image source={RW} resizeMode='cover' />
            </TouchableOpacity>



            {/* Default Vallen*/}
            <TouchableOpacity style={{flexDirection:'row', marginLeft: 15}} onPress={()=>navigation.navigate('DefaultView')} >
              <Image source={HD} resizeMode='cover' />
            </TouchableOpacity>



            {/* Default Wilmore*/}
            <TouchableOpacity style={{flexDirection:'row', marginLeft: 15}} onPress={()=>navigation.navigate('DefaultView')} >
              <Image source={HD} resizeMode='cover' />
            </TouchableOpacity>



            {/* Default Marchel*/}
            <TouchableOpacity style={{flexDirection:'row', marginLeft: 15}} onPress={()=>navigation.navigate('DefaultView')} >
              <Image source={HD} resizeMode='cover' />
            </TouchableOpacity>



            {/* Default Richard*/}
            <TouchableOpacity style={{flexDirection:'row', marginLeft: 15}} onPress={()=>navigation.navigate('DefaultView')} >
              <Image source={HD} resizeMode='cover' />
            </TouchableOpacity>

          </View>
        </ScrollView>
      </View>

      <View style={styles.Wrapper3}>
        <Text style={styles.Text3}>Wisata Pantai</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{flexDirection: 'row'}}>



             {/* Default */}
            <TouchableOpacity style={{flexDirection:'row', marginLeft: 15}} onPress={()=>navigation.navigate('DefaultView')} >
              <Image source={HD} resizeMode='cover' />
            </TouchableOpacity>



            {/* Default Vallen*/}
            <TouchableOpacity style={{flexDirection:'row', marginLeft: 15}} onPress={()=>navigation.navigate('DefaultView')} >
              <Image source={HD} resizeMode='cover' />
            </TouchableOpacity>

            {/* Default Marchel*/}
            <TouchableOpacity style={{flexDirection:'row', marginLeft: 15}} onPress={()=>navigation.navigate('DefaultView')} >
              <Image source={HD} resizeMode='cover' />
            </TouchableOpacity>

            {/* Default Wilmore*/}
            <TouchableOpacity style={{flexDirection:'row', marginLeft: 15}} onPress={()=>navigation.navigate('DefaultView')} >
              <Image source={HD} resizeMode='cover' />
            </TouchableOpacity>

            {/* Default Richard*/}
            <TouchableOpacity style={{flexDirection:'row', marginLeft: 15}} onPress={()=>navigation.navigate('DefaultView')} >
              <Image source={HD} resizeMode='cover' />
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
    marginBottom: 15,
  },
});