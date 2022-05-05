/* eslint-disable comma-dangle */
/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */
import {StyleSheet, View} from 'react-native';
import React from 'react';
import { Button, Gap, Header, TextInput } from '../../components';

const SignIn = ({navigation}) => {
 return (
    <View style={styles.page}>
      <Header title="Sign In" />
        <View style={styles.contentWrapper}>
          <TextInput title="Alamat Email" placeholder="Masukkan Email...."/>

          <Gap height={16}/>

          <TextInput title="Password" placeholder="Masukkan Password...." />

          <Gap height={24} />

          <Button title="Sign In" onPress={()=>navigation.navigate('OnBoard')}/>

          <Gap height={12} />
          <Button title="Create New Account" color='#8092A3' textColor='white' onPress={()=>navigation.navigate('SignUp')}/>
        </View>
    </View>
  );
};


export default SignIn;

const styles = StyleSheet.create({
  page:{
    flex: 1,
    backgroundColor: 'white',
  },
  contentWrapper: {
    paddingHorizontal: 24,
    paddingTop: 2,
    marginTop:2,
    backgroundColor:'white',
    flex: 1,
    color: 'black',

  }
});

