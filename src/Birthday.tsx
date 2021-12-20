import * as React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, Animated } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useFonts, AnonymousPro_700Bold } from '@expo-google-fonts/anonymous-pro';
import { useNavigation } from '@react-navigation/native';

import { Images } from './img/Images';

function Birthday() {
  const {navigate} = useNavigation();
  let [fontsLoaded] = useFonts({AnonymousPro_700Bold});
  const [pos, setPos] = React.useState(0);
  const posAnim = React.useRef(new Animated.Value(0)).current;

  const handlePressLeft = () => {
    if (pos == 0) {
      navigate("Home");
      return;
    } else {
      let offset = wp('70%');
      Animated.timing(posAnim, {toValue: -offset * (pos-1), duration: 500, useNativeDriver: false}).start();
      setPos(pos - 1);
    }
  }

  const handlePressRight = () => {
    if (pos == 2) {
      navigate("Home");
      return;
    } else {
      let offset = wp('70%');
      Animated.timing(posAnim, {toValue: -offset * (pos+1), duration: 500, useNativeDriver: false}).start();
      setPos(pos + 1);
    }
  }
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.bgImg} source={Images.illust_cake} />
      {/* left right switches */}
      <View style={styles.switchContainer}>
        <TouchableOpacity onPress={handlePressLeft}>
          <Image style={styles.switchIcon} source={Images.left} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePressRight}>
          <Image style={styles.switchIcon} source={Images.right} />
        </TouchableOpacity>
      </View>
      {/* position dots */}
      <View style={styles.headerContainer}>
        <View
          style={[
            styles.positionDot,
            {backgroundColor: pos==0 ? '#781d42': undefined}
          ]}
        />
        <View
          style={[
            styles.positionDot,
            {backgroundColor: pos==1 ? '#781d42': undefined}
          ]}
        />
        <View
          style={[
            styles.positionDot,
            {backgroundColor: pos==2 ? '#781d42': undefined}
          ]}
        />
      </View>
      {/* main contents */}
      <View style={styles.mainContainer}>
        <Animated.View style={[styles.textContainer, {left: posAnim}]}>
          <Text style={styles.contents}>SAMPLE1</Text>
          <Text style={styles.contents}>SAMPLE2</Text>
          <Text style={styles.contents}>SAMPLE3</Text>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#c7b198'
  },
  bgImg: {
    width: wp('100%'),
    maxWidth: 600,
    height: wp('100%') / 2,
    maxHeight: 300,
    position: 'absolute',
    bottom: 0,
  },
  switchContainer: {
    width: '100%',
    position: 'absolute',
    top: '35%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  switchIcon: {
    width: 50,
    height: 50,
    tintColor: '#781d42'
  },
  headerContainer: {
    width: '100%',
    height: '7%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  positionDot: {
    width: 10,
    height: 10,
    marginHorizontal: 3,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#781d42'
  },
  mainContainer: {
    width: '70%',
    height: '55%',
    marginTop: 30,
    overflow: 'hidden'
  },
  textContainer: {
    width: '300%',
    height: '100%',
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  contents: {
    width: '33%',
    height: '100%'
  }
});

export default Birthday;