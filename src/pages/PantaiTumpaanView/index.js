// /* eslint-disable prettier/prettier */
// /* eslint-disable no-trailing-spaces */
// /* eslint-disable prettier/prettier */
// /* eslint-disable react-native/no-inline-styles */
// /* eslint-disable prettier/prettier */
// /* eslint-disable semi */
// /* eslint-disable prettier/prettier */
// /* eslint-disable jsx-quotes */
// /* eslint-disable prettier/prettier */
// /* eslint-disable no-unused-vars */
// /* eslint-disable prettier/prettier */
// import {ImageBackground, ScrollView, StyleSheet, Text, View, Image, Linking, TouchableOpacity} from 'react-native';
// import React from 'react';
// import { DefaultHeader as DH, HomeButton, PantaiTumpaView as PTV } from '../../assets';
// import { Button, Gap } from '../../components';

// const PantaiTumpaanView = ({navigation}) => {
//   return (
//     <ScrollView style={styles.container}>
//       <Image source={PTV} resizeMode='cover'/>
//       <Text style={styles.Text1}>Pantai Tumpaan</Text>

//          <View style={styles.btn}>
//           <Button title="Akomodasi" style={{padding: 50}} onPress={()=>navigation.navigate('PantaiTumpaanAkomodasi')}/>
//           <Button title="Lokasi" onPress={ ()=>{ Linking.openURL('https://www.google.com/maps/place/Pantai+Tumpaan+Sawangan/@1.2253928,125.0301385,14z/data=!4m13!1m7!3m6!1s0x328730f3f638e999:0xdf57bc85abac3ea0!2sPantai+Tanjung+Tumpaan!3b1!8m2!3d1.1002577!4d124.9891621!3m4!1s0x328722a5576f3be1:0x5f474bc602050db0!8m2!3d1.2253971!4d125.0476527')}} />
//         </View>
//       <View style={styles.Wrapper1}>
//         <Gap height={20} />
//         <Text style={styles.TextNotes}>
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est."
//         </Text>
//       </View>

//       <Text style={styles.texttitle1}>Harga Masuk</Text>
//       <View style={styles.Wrapper2}>
//         <Text>Per/Mobil</Text>
//         <View style={styles.backround}>
//           <Text style={styles.textprice}>10000</Text>
//         </View>
        
//         <View style={styles.homepress}>
//           <TouchableOpacity activeOpacity={0.6} onPress={()=>navigation.navigate('Home')}>
//             <HomeButton />
//           </TouchableOpacity>
//         </View>
//       </View>

//       <View style={styles.Wrapper2}>
//         <Text>Per/Motor</Text>
//         <View style={styles.backround}>
//           <Text style={styles.textprice}>5000</Text>
//         </View>
//         </View>
//     </ScrollView>
//   );
// };

// export default PantaiTumpaanView;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   Text1: {
//     fontFamily: 'Poppins-Medium',
//     fontSize: 20,
//     color: 'black',
//     padding: 15,
//   },
//   TextNotes: {
//     fontFamily:'Poppins-Regular',
//     color: 'black',
//     textAlign: 'center',
//   },
//   Wrapper1: {
//     paddingTop: 10,
//     paddingHorizontal: 40,
//   },
//   Wrapper2:{
//     flexDirection: 'row',
//     paddingHorizontal: 30,
//     paddingTop: 1,
//     alignItems: 'center',
//   },
//   backround:{
//     height: 45,
//     width: 90,
//     backgroundColor: '#65FA31',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 15,
//     marginLeft: 40,
//   },
//   textprice: {
//     color : 'black',
//     fontFamily: 'Poppins-Medium',
//     fontSize: 14,
//   },
//   texttitle1: {
//     fontFamily: 'Poppins-Bold',
//     fontSize: 25,
//     marginLeft: 20,
//     marginTop: 10,
//   },
//   btn: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//   },
//   homepress:{
//     position: 'absolute',
//     bottom: 2,
//     left: 300,
//   },
// });
