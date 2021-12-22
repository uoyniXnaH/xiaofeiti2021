import * as React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, Animated } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useFonts, ZCOOLKuaiLe_400Regular } from '@expo-google-fonts/zcool-kuaile';
import { KosugiMaru_400Regular } from '@expo-google-fonts/kosugi-maru';
import { useNavigation } from '@react-navigation/native';

import { Images } from './img/Images';

function Birthday() {
  const {navigate} = useNavigation();
  let [f1] = useFonts({ZCOOLKuaiLe_400Regular});
  let [f2] = useFonts({KosugiMaru_400Regular});
  const [pos, setPos] = React.useState(0);
  const posAnim = React.useRef(new Animated.Value(0)).current;
  const opAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(opAnim, {toValue: 1, duration: 500, useNativeDriver: false}).start();
  },[])

  const handlePressLeft = () => {
    if (pos == 0) {
      navigate("Home");
      return;
    } else {
      let offset = wp('70%');
      Animated.timing(posAnim, {toValue: -offset * (pos-1), duration: 300, useNativeDriver: false}).start();
      setPos(pos - 1);
    }
  }

  const handlePressRight = () => {
    if (pos == 2) {
      navigate("Home");
      return;
    } else {
      let offset = wp('70%');
      Animated.timing(posAnim, {toValue: -offset * (pos+1), duration: 300, useNativeDriver: false}).start();
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
            {backgroundColor: pos==0 ? '#781d42': '#bdbdbd'}
          ]}
        />
        <View
          style={[
            styles.positionDot,
            {backgroundColor: pos==1 ? '#781d42': '#bdbdbd'}
          ]}
        />
        <View
          style={[
            styles.positionDot,
            {backgroundColor: pos==2 ? '#781d42': '#bdbdbd'}
          ]}
        />
      </View>
      {/* main contents */}
      <Animated.View style={[styles.mainContainer, {opacity: opAnim}]}>
        <Animated.View style={[styles.textContainer, {left: posAnim}]}>
          <View style={styles.block}>
            <Text style={styles.contents}>老婆生日快乐！</Text>
            <Text style={styles.contents}>今年过得并不容易，各地疫情反反复复，日本入境开了又关。</Text>
            <Text style={styles.contents}>即便如此，我还是想说：老婆生日快乐！</Text>
            <Text style={styles.contents}>因为生日就是需要暂时抛开烦恼和不满，好好去享受。</Text>
            <Text style={styles.contents}>虽然现在还无法团聚，但我们还可以隔着手机屏幕，倒上一杯酒，摆上一块小蛋糕（为什么要用蛋糕下酒？），一起吃喝，一起嬉笑（所以为什么要用蛋糕下酒？）</Text>
          </View>
          <View style={styles.block}>
            <Text style={styles.contents}>时间过得很快，你去年的生日彷佛还在去年。</Text>
            <Text style={styles.contents}>然而一转眼一年过去，2021年就这样迎来了尾声。而我也终于可以宣布：我们之间的代沟，又缩小到了1岁！</Text>
            <Text style={styles.contents}>而对于老婆来说，这第<Text style={[styles.contents, styles.textLineThrough]}> 17 </Text>29个生日，是怎么样的一个生日呢？</Text>
            <Text style={styles.contents}>无论如何，我希望老婆能够每年生日都开开心心，能够每天都开开心心~</Text>
          </View>
          <View style={styles.block}>
            <Text style={styles.contentsJa}>提提、お誕生日おめでとう！</Text>
            <Text style={styles.contentsJa}>傍にいないけど、提提がいるので楽しい。</Text>
            <Text style={styles.contentsJa}>しんどい時も、つらい時も、提提のことを思い出すとこころが明るくなる。</Text>
            <Text style={styles.contentsJa}>提提の顔を見れば、幸せを感じる。</Text>
            <Text style={styles.contentsJa}>だから、提提も楽しく、幸せになって欲しい。なってもらいたい。</Text>
            <Text style={styles.contentsJa}>提提、てぇてぇ♡</Text>
          </View>
        </Animated.View>
      </Animated.View>
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
    width: 8,
    height: 8,
    marginHorizontal: 2,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#781d42'
  },
  mainContainer: {
    width: '70%',
    height: '60%',
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
  block: {
    width: '33%',
    height: '100%',
    overflow: 'scroll'
  },
  contents: {
    fontSize: 18,
    fontFamily: 'ZCOOLKuaiLe_400Regular',
    lineHeight: 24,
    color: 'rgba(0,0,0,0.8)',
    marginBottom: 10
  },
  contentsJa: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'KosugiMaru_400Regular',
    lineHeight: 24,
    color: 'rgba(0,0,0,0.8)',
    marginBottom: 8
  },
  textLineThrough: {
    textDecorationLine: "line-through"
  }
});

export default Birthday;