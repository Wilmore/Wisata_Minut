/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
/* eslint-disable space-infix-ops */
/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({title, color ='#02CFBE', textColor = '#393939', lebar=45, onPress}) => {

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={styles.container(color)}>
        <Text style={styles.text(textColor)}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  container: (color,) => ({
    width: 180,
    height: 45,
    backgroundColor: color,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
  }),

  text: (textColor) => ({
    color : textColor,
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
  })
})