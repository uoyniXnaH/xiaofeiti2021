import * as React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, Animated } from 'react-native';
import { useFonts, AnonymousPro_700Bold } from '@expo-google-fonts/anonymous-pro';
import { useNavigation } from '@react-navigation/native';

import { Images } from './img/Images';

function Home() {
  const {navigate} = useNavigation();
  let [fontsLoaded] = useFonts({AnonymousPro_700Bold});
  const [bgType, setBgType] = React.useState(0);
  const [rotate, setRotate] = React.useState(false);
  const opAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(opAnim, {toValue: 1, duration: 500, useNativeDriver: false}).start();
  },[]);

  const handlePressNE = () => {
    setRotate(false);
    if (bgType == 2) {
      setBgType(0);
    } else {
      setBgType(bgType + 1);
    }
  }

  const handlePressSW = () => {
    setRotate(true);
    if (bgType == 0) {
      setBgType(2);
    } else {
      setBgType(bgType - 1);
    }
  }
  return (
    <View style={styles.container}>
      {bgType>0 && <ImageBackground
        style={styles.bgImg}
        resizeMode='repeat'
        source={rotate ?
          (bgType==1 ? Images.bg1_90 : Images.bg2_90) :
          (bgType==1 ? Images.bg1 : Images.bg2)}
      />}
      <Animated.View style={[styles.mainContainer, {opacity: opAnim}]}>
        <TouchableOpacity style={[styles.blockContainer, {backgroundColor:'#a68dad'}]} onPress={() => navigate("Birthday")}>
          <Image style={styles.cakeIcon} resizeMode='contain' source={Images.cake} />
          <Text style={styles.hintText}>CLICK!</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.blockContainer, {backgroundColor:'#dfd3c3'}]} onPress={handlePressNE}>
          <View style={styles.specialContainer}>
            <View style={styles.specialSub}><Text style={styles.specialText}>L</Text></View>
            <View style={styles.specialSub}><Text style={styles.specialText}>O</Text></View>
            <View style={styles.specialSub}><Text style={styles.specialText}>V</Text></View>
            <View style={styles.specialSub}><Text style={styles.specialText}>E</Text></View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.blockContainer, {backgroundColor:'#dfd3c3'}]} onPress={handlePressSW}>
          <Image style={styles.heartIcon} source={Images.heart} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.blockContainer, {backgroundColor:'#a68dad'}]} onPress={() => navigate("Future")}>
          <Image style={styles.cakeIcon} resizeMode='contain' source={Images.plane} />
          <Text style={styles.hintText}>CLICK!</Text>
        </TouchableOpacity>
      </Animated.View>
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
  bgImg: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0
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