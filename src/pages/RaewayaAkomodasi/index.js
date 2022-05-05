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
import { DefaultImage, LocationIcon, RaewayaCafe, SutanRaja, TeduMatuari, Zeropoint } from '../../assets'

const RaewayaAkomodasi = ({navigation}) => {
  return (
    <View style={styles.container}>

        <Header title="Akomodasi"  onBack={() => navigation.goBack()}/>
        <Text style={styles.texttitle}>Akomodasi Terdekat</Text>

        <ScrollView >

            <TouchableOpacity activeOpacity={0.7} onPress={ ()=>{ Linking.openURL('https://www.google.com/maps/dir/Bukit+Pandangan+%22Rae+Waya+Hills%22,+Airmadidi+Atas,+North+Minahasa+Regency,+North+Sulawesi/Raewaya+Hills,+Airmadidi+Atas,+Airmadidi,+Airmadidi+Atas,+Kec.+Airmadidi,+Kabupaten+Minahasa+Utara,+Sulawesi+Utara/@1.4508936,124.9796989,18z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x3287093c572d25b3:0x625eb51e9ffa94ae!2m2!1d124.980635!2d1.4507614!1m5!1m1!1s0x3287093b03800c4b:0x79f2c842f9734780!2m2!1d124.9809514!2d1.4510976!3e0')}}>
                <View style={styles.Wrapper}>
                    <RaewayaCafe/>
                    <View style={styles.Wrapper2}>
                        <Text style={styles.Text1}>Tempat Makan</Text>
                        <Text style={styles.Text2}>Raewaya Hills</Text>
                        <View style={{flexDirection: 'row', alignItems:'center', alignContent:'center', marginLeft:15}}>
                            <LocationIcon/>
                            <Text style={styles.Text3}>0 KM</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7} onPress={ ()=>{ Linking.openURL('https://www.google.com/maps/dir/Raewaya+Hills,+Airmadidi+Atas,+North+Minahasa+Regency,+North+Sulawesi/Three+Siblings+Restaurant,+FX78%2BF3V,+Jl.+SBY,+Matungkas,+Dimembe,+North+Minahasa+Regency,+North+Sulawesi/@1.4632681,124.9653331,17.79z/data=!4m14!4m13!1m5!1m1!1s0x3287093b03800c4b:0x79f2c842f9734780!2m2!1d124.9809514!2d1.4510976!1m5!1m1!1s0x328709c19b94c41f:0xb5d17658fa4f955e!2m2!1d124.9651866!2d1.4637366!3e0')}}>
                <View style={styles.Wrapper}>
                    <TeduMatuari/>
                    <View style={styles.Wrapper2}>
                        <Text style={styles.Text1}>Tempat Makan</Text>
                        <Text style={styles.Text2}>RM. Tedu Matuari</Text>
                        <View style={{flexDirection: 'row', alignItems:'center', alignContent:'center', marginLeft:15}}>
                            <LocationIcon/>
                            <Text style={styles.Text3}>4.2 KM</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7} onPress={ ()=>{ Linking.openURL('https://www.google.com/maps/dir/Raewaya+Hills,+Airmadidi+Atas,+North+Minahasa+Regency,+North+Sulawesi/RM.ZERO+POINT+-+SUKUR,+Matungkas,+North+Minahasa+Regency,+North+Sulawesi/@1.4628307,124.9637193,15z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x3287093b03800c4b:0x79f2c842f9734780!2m2!1d124.9809514!2d1.4510976!1m5!1m1!1s0x328709705421c555:0x9cf306519d5332a!2m2!1d124.964203!2d1.4631917!3e0')}}>
                <View style={styles.Wrapper}>
                    <Zeropoint/>
                    <View style={styles.Wrapper2}>
                        <Text style={styles.Text1}>Tempat Makan</Text>
                        <Text style={styles.Text2}>RM. Zeropoint</Text>
                        <View style={{flexDirection: 'row', alignItems:'center', alignContent:'center', marginLeft:15}}>
                            <LocationIcon/>
                            <Text style={styles.Text3}>4.3 KM</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7} onPress={ ()=>{ Linking.openURL('https://www.google.com/maps/dir/Raewaya+Hills,+Airmadidi+Atas,+North+Minahasa+Regency,+North+Sulawesi/RM.ZERO+POINT+-+SUKUR,+Matungkas,+North+Minahasa+Regency,+North+Sulawesi/@1.4628307,124.9637193,15z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x3287093b03800c4b:0x79f2c842f9734780!2m2!1d124.9809514!2d1.4510976!1m5!1m1!1s0x328709705421c555:0x9cf306519d5332a!2m2!1d124.964203!2d1.4631917!3e0')}}>
                <View style={styles.Wrapper}>
                    <SutanRaja/>
                    <View style={styles.Wrapper2}>
                        <Text style={styles.Text1}>Tempat Penginapan</Text>
                        <Text style={styles.Text2}>Hotel Sutan Raja</Text>
                        <View style={{flexDirection: 'row', alignItems:'center', alignContent:'center', marginLeft:15}}>
                            <LocationIcon/>
                            <Text style={styles.Text3}>11 KM</Text>
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
                            <Text style={styles.Text3}>- nk KM</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>


        </ScrollView>
    </View>
  )
}

export default RaewayaAkomodasi

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