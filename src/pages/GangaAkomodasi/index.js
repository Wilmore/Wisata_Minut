/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Linking } from 'react-native'
import React from 'react'
import { Header } from '../../components'
import { DefaultImage, LocationIcon, SutanRaja, TeduMatuari, Zeropoint, GangaResort, MmResort } from '../../assets'

const GangaAkomodasi = ({navigation}) => {
  return (
    <View style={styles.container}>

        <Header title="Akomodasi"  onBack={() => navigation.goBack()}/>
        <Text style={styles.texttitle}>Akomodasi Terdekat</Text>

        <ScrollView >

            <TouchableOpacity activeOpacity={0.7} onPress={ ()=>{ Linking.openURL('https://www.google.co.id/maps/place/Gangga+Island+Resort+%26+Spa/@1.7624483,125.0524913,16z/data=!4m8!3m7!1s0x3287c81ca3f735f5:0x2ec8e12ca4532894!5m2!4m1!1i2!8m2!3d1.760014!4d125.050882')}}>
                <View style={styles.Wrapper}>
                    <GangaResort/>
                    <View style={styles.Wrapper2}>
                        <Text style={styles.Text1}>hotel Resort & Spa</Text>
                        <Text style={styles.Text2}>Pulau Ganga</Text>
                        <View style={{flexDirection: 'row', alignItems:'center', alignContent:'center', marginLeft:15}}>
                            <LocationIcon/>
                            <Text style={styles.Text3}>1 KM</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7} onPress={ ()=>{ Linking.openURL('https://www.google.com/maps/dir/Raewaya+Hills,+Airmadidi+Atas,+North+Minahasa+Regency,+North+Sulawesi/Three+Siblings+Restaurant,+FX78%2BF3V,+Jl.+SBY,+Matungkas,+Dimembe,+North+Minahasa+Regency,+North+Sulawesi/@1.4632681,124.9653331,17.79z/data=!4m14!4m13!1m5!1m1!1s0x3287093b03800c4b:0x79f2c842f9734780!2m2!1d124.9809514!2d1.4510976!1m5!1m1!1s0x328709c19b94c41f:0xb5d17658fa4f955e!2m2!1d124.9651866!2d1.4637366!3e0')}}>
                <View style={styles.Wrapper}>
                    <MmResort/>
                    <View style={styles.Wrapper2}>
                        <Text style={styles.Text1}>MM. TRAVEL GANGGA RESORT</Text>
                        <Text style={styles.Text2}>Pulau Ganga</Text>
                        <View style={{flexDirection: 'row', alignItems:'center', alignContent:'center', marginLeft:15}}>
                            <LocationIcon/>
                            <Text style={styles.Text3}>4.2 KM</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </ScrollView>
    </View>
  )
}

export default GangaAkomodasi

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'white',
    },
    texttitle:{
        fontFamily: 'Poppins-Bold',
        fontSize: 25,
        textAlign: 'center',
        paddingBottom: 30,
    },
    Wrapper:{
        paddingHorizontal: 20,
        paddingVertical: 15,
        flexDirection: 'row',
    },
    Wrapper2: {
        marginLeft:20,
        justifyContent: 'center',
    },
    Text1: {
        fontFamily: 'Poppins-Medium',
        color: '#9C9C9C',
        fontSize: 14,
    },
    Text2: {
        fontFamily: 'Poppins-Medium',
        color: 'black',
        fontSize: 14,
    },
    Text3: {
        fontFamily: 'Poppins-Medium',
        color: 'black',
        fontSize: 14,
        marginLeft: 5,
    },
})