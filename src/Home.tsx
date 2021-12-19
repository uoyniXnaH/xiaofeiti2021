import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useFonts, AnonymousPro_700Bold } from '@expo-google-fonts/anonymous-pro';

import { Images } from './img/Images';

function Home() {
  let [fontsLoaded] = useFonts({AnonymousPro_700Bold});
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <TouchableOpacity style={[styles.blockContainer, {backgroundColor:'#a68dad'}]}>
          <Image style={styles.cakeIcon} resizeMode='contain' source={Images.cake} />
          <Text style={styles.hintText}>CLICK!</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.blockContainer, {backgroundColor:'#dfd3c3'}]}>
          <View style={styles.specialContainer}>
            <View style={styles.specialSub}><Text style={styles.specialText}>L</Text></View>
            <View style={styles.specialSub}><Text style={styles.specialText}>O</Text></View>
            <View style={styles.specialSub}><Text style={styles.specialText}>V</Text></View>
            <View style={styles.specialSub}><Text style={styles.specialText}>E</Text></View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.blockContainer, {backgroundColor:'#dfd3c3'}]}>
          <Image style={styles.heartIcon} source={Images.heart} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.blockContainer, {backgroundColor:'#a68dad'}]}>
          <Image style={styles.cakeIcon} resizeMode='contain' source={Images.plane} />
          <Text style={styles.hintText}>CLICK!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c7b198'
  },
  mainContainer: {
      width: '85%',
      height:'75%',
      maxWidth: 400,
      flexDirection: 'row',
      justifyContent: 'space-between',
      flexWrap: 'wrap'
  },
  blockContainer: {
      width: '47%',
      height: '47%',
      justifyContent: 'center',
      alignItems: 'center'
  },
  cake: {
    width: 48,
    height: 55
  },
  cakeIcon: {
    width: 48,
    height: 55,
    tintColor: '#dfd3c3'
  },
  hintText: {
    fontSize: 18,
    fontWeight: '500',
    marginTop: 3,
    color: '#dfd3c3'
  },
  specialContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '55%',
    height: '45%',
    left: 3
  },
  specialSub: {
    width: '50%',
    height: '50%',
    justifyContent: 'center',
    textAlign: 'center'
  },
  specialText: {
    fontFamily: 'AnonymousPro_700Bold',
    fontSize: 70,
    fontWeight: '700',
    color: '#ff7777',
    transform: [{scaleY: 0.9}]
  },
  heartIcon: {
    width: 64,
    height: 64,
    tintColor: '#ff7777'
  }
});

export default Home;