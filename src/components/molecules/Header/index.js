/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import { Back } from '../../../assets';
import { Gap } from '../../atoms';

const Header = ({title, onBack}) => {
  return (
    <View style={styles.container}>

      {
        onBack && (
          <TouchableOpacity onPress={onBack} activeOpacity={0.5}>
            <View style={styles.back}>
              <Back/>
            </View>
         </TouchableOpacity>
        )
      }

      <Gap width={20} />

      <View style={styles.textWrap}>
        <Text style={[styles.text, {alignSelf: 'flex-start', marginRight: 15}]}>Wisata</Text>
        <Text style={[styles.text, {alignSelf: 'flex-end', marginTop: -30}]}>Minut</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container : {
    height: 150,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  text : {
    fontFamily: 'Italianno',
    color: '#3D813B',
    fontSize: 45,
  },
  back: {
    padding: 5,
  },
  textWrap: {
    marginVertical: 20,
    marginRight: 40,
  },
});