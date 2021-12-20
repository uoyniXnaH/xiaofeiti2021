import * as React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useFonts, AnonymousPro_700Bold } from '@expo-google-fonts/anonymous-pro';
import { useNavigation } from '@react-navigation/native';

import { Images } from './img/Images';

function Birthday() {
  const {navigate} = useNavigation();
  let [fontsLoaded] = useFonts({AnonymousPro_700Bold});
  const [pos, setPos] = React.useState(0);

  const handlePressLeft = () => {
    if (pos == 0) {
      navigate("Home");
      return;
    } else {
      setPos(pos - 1);
    }
  }

  const handlePressRight = () => {
    if (pos == 2) {
      navigate("Home");
      return;
    } else {
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
    top: '40%',
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
  }
});

export default Birthday;