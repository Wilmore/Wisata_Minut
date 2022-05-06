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
import { AkomodasiTumpaan, DefaultImage, HomeButton, LocationIcon} from '../../assets'

const PantaiTumpaanAkomodasi = ({navigation}) => {
  return (
    <View style={styles.container}>

        <Header title="Akomodasi"  onBack={() => navigation.goBack()}/>
        <Text style={styles.texttitle}>Akomodasi Terdekat</Text>

        <ScrollView >

            <TouchableOpacity activeOpacity={0.7} onPress={ ()=>{ Linking.openURL('https://www.google.com/maps/dir/Pantai+Tumpaan+Sawangan,+Sawangan,+Minahasa+Regency,+North+Sulawesi/73W8%2BFGM+Vanilla+Beach+Villa,+Makalisung,+Kec.+Kema,+Kabupaten+Minahasa+Utara,+Sulawesi+Utara/@1.2606795,125.0215251,13z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x328722a5576f3be1:0x5f474bc602050db0!2m2!1d125.047648!2d1.2253928!1m5!1m1!1s0x328719a6339c74cb:0xb7e66bf34610df75!2m2!1d125.0662867!2d1.2962081')}}>
                <View style={styles.Wrapper}>
                    <AkomodasiTumpaan/>
                    <View style={styles.Wrapper2}>
                        <Text style={styles.Text1}>Tempat Penginapan</Text>
                        <Text style={styles.Text2}>Vanilla Beach Villa</Text>
                        <View style={{flexDirection: 'row', alignItems:'center', alignContent:'center', marginLeft:15}}>
                            <LocationIcon/>
                            <Text style={styles.Text3}>10 KM</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7} onPress={ ()=>{ Linking.openURL('https://www.google.com/maps/dir/Raewaya+Hills,+Airmadidi+Atas,+North+Minahasa+Regency,+North+Sulawesi/RM.ZERO+POINT+-+SUKUR,+Matungkas,+North+Minahasa+Regency,+North+Sulawesi/@1.4628307,124.9637193,15z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x3287093b03800c4b:0x79f2c842f9734780!2m2!1d124.9809514!2d1.4510976!1m5!1m1!1s0x328709705421c555:0x9cf306519d5332a!2m2!1d124.964203!2d1.4631917!3e0')}}>
                <View style={styles.Wrapper}>
                    <DefaultImage/>
                    <View style={styles.Wrapper2}>
                        <Text style={styles.Text1}>Default Text</Text>
                        <Text style={styles.Text2}>Default Name Text</Text>
                        <View style={{flexDirection: 'row', alignItems:'center', alignContent:'center', marginLeft:15}}>
                            <LocationIcon/>
                            <Text style={styles.Text3}>- KM</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7} onPress={ ()=>{ Linking.openURL('https://www.google.com/maps/dir/Raewaya+Hills,+Airmadidi+Atas,+North+Minahasa+Regency,+North+Sulawesi/RM.ZERO+POINT+-+SUKUR,+Matungkas,+North+Minahasa+Regency,+North+Sulawesi/@1.4628307,124.9637193,15z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x3287093b03800c4b:0x79f2c842f9734780!2m2!1d124.9809514!2d1.4510976!1m5!1m1!1s0x328709705421c555:0x9cf306519d5332a!2m2!1d124.964203!2d1.4631917!3e0')}}>
                <View style={styles.Wrapper}>
                    <DefaultImage/>
                    <View style={styles.Wrapper2}>
                        <Text style={styles.Text1}>Default Text</Text>
                        <Text style={styles.Text2}>Default Name Text</Text>
                        <View style={{flexDirection: 'row', alignItems:'center', alignContent:'center', marginLeft:15}}>
                            <LocationIcon/>
                            <Text style={styles.Text3}>- KM</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7} onPress={ ()=>{ Linking.openURL('https://www.google.com/maps/dir/Raewaya+Hills,+Airmadidi+Atas,+North+Minahasa+Regency,+North+Sulawesi/RM.ZERO+POINT+-+SUKUR,+Matungkas,+North+Minahasa+Regency,+North+Sulawesi/@1.4628307,124.9637193,15z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x3287093b03800c4b:0x79f2c842f9734780!2m2!1d124.9809514!2d1.4510976!1m5!1m1!1s0x328709705421c555:0x9cf306519d5332a!2m2!1d124.964203!2d1.4631917!3e0')}}>
                <View style={styles.Wrapper}>
                    <DefaultImage/>
                    <View style={styles.Wrapper2}>
                        <Text style={styles.Text1}>Default Text</Text>
                        <Text style={styles.Text2}>Default Name Text</Text>
                        <View style={{flexDirection: 'row', alignItems:'center', alignContent:'center', marginLeft:15}}>
                            <LocationIcon/>
                            <Text style={styles.Text3}>- KM</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7} onPress={ ()=>{ Linking.openURL('https://www.google.com/maps/dir/Raewaya+Hills,+Airmadidi+Atas,+North+Minahasa+Regency,+North+Sulawesi/RM.ZERO+POINT+-+SUKUR,+Matungkas,+North+Minahasa+Regency,+North+Sulawesi/@1.4628307,124.9637193,15z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x3287093b03800c4b:0x79f2c842f9734780!2m2!1d124.9809514!2d1.4510976!1m5!1m1!1s0x328709705421c555:0x9cf306519d5332a!2m2!1d124.964203!2d1.4631917!3e0')}}>
                <View style={styles.Wrapper}>
                    <DefaultImage/>
                    <View style={styles.Wrapper2}>
                        <Text style={styles.Text1}>Default Text</Text>
                        <Text style={styles.Text2}>Default Name Text</Text>
                        <View style={{flexDirection: 'row', alignItems:'center', alignContent:'center', marginLeft:15}}>
                            <LocationIcon/>
                            <Text style={styles.Text3}>- KM</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>


        </ScrollView>
    </View>
  )
}

export default PantaiTumpaanAkomodasi

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
    homepress:{
    position: 'absolute',
    bottom: 2,
    left: 300,
  },
})