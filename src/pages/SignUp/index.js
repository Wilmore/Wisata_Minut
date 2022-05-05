/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable keyword-spacing */
/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native'
import React, {useState} from 'react'
import { Button, Gap, Header, TextInput } from '../../components'
import {launchImageLibrary} from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';


const SignUp = ({navigation}) => {
  const [photo, setPhoto] = useState('');
  const [hasPhoto, setHasPhoto] = useState(false)

  const getPhoto = async () => {
    const result = await launchImageLibrary({
      maxHeight:200,
      maxWidth:200, 
      includeBase64: true
    });
    if(result.didCancel){
      setHasPhoto(false)
      showMessage({
      message: "Upload Foto Dibatalkan",
      type: "default",
      backgroundColor: "#D9435E", // background color
      color: "white", // text color
    });
    }else{
      setPhoto(result.assets[0].uri);
      setHasPhoto(true);
    }
  };

  return (
    <View style={styles.page} >
      <Header title='Sign Up' onBack={() => navigation.goBack()}/>
      <View style={styles.contentWrapper}>

          <View style={styles.avatarWrapper}>
            <View style={styles.border}>

              <TouchableOpacity onPress={getPhoto} activeOpacity={0.5}>
                { !hasPhoto && (
                  <View style={styles.addPhoto}>
                    <Text style={styles.addPhotoText}> Add Photo</Text>
                </View>
                )}
                { hasPhoto &&
                  <Image source={{uri: photo}} style={styles.avatar} />
                }
              </TouchableOpacity>

            </View>
          </View>

          <TextInput title='Fullname' placeholder='Enter your full name'/>
          <Gap height={16} />
          <TextInput title='Email Addres' placeholder= 'Enter your email address'/>
          <Gap height={16} />
          <TextInput title='Password' placeholder= 'Enter your password'/>

            <Gap height={24} />
          <Button title='Sign-Up' />
      </View>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
    },
    contentWrapper: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: -10,
        paddingHorizontal: 24,
    },
    addPhoto: {
        height: 90,
        width: 90,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 90,
    },
    avatar: {
      height: 90,
      width: 90,
      borderRadius: 90,
    },
    addPhotoText: {
        fontFamily: 'Poppins-Light',
        fontSize: 12,
        color: 'black',
        maxWidth: 40,
        textAlign:'center',
    },
    border: {
        borderWidth: 1,
        borderColor: '#8D92A3',
        width: 110,
        height: 110,
        borderRadius: 110,
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'dashed',
    },
    avatarWrapper :{
        alignItems: 'center',
        marginTop: 26,
        marginBottom: 16,

    }
})