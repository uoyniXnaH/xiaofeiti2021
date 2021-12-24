import * as React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, TouchableOpacity, TouchableWithoutFeedback, Animated, Modal } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useFonts, ZCOOLKuaiLe_400Regular } from '@expo-google-fonts/zcool-kuaile';
import { KosugiMaru_400Regular } from '@expo-google-fonts/kosugi-maru';
import { useNavigation } from '@react-navigation/native';

import { Images } from './img/Images';

function Future() {
  const {navigate} = useNavigation();
  let [f1] = useFonts({ZCOOLKuaiLe_400Regular});
  let [f2] = useFonts({KosugiMaru_400Regular});
  const [pos, setPos] = React.useState(0);
  const [lotteryModal, setLotteryModal] = React.useState(false);
  const [lottery, setLottery] = React.useState(0);
  const [unlockTxt, setUnlockTxt] = React.useState("");
  const [badUnlockModal, setBadUnlockModal] = React.useState(false);
  const opAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(opAnim, {toValue: 1, duration: 500, useNativeDriver: false}).start();
  },[])

  const handleLottery = () => {
    const r = Math.floor(Math.random() * 4);
    setLottery(r);
    setLotteryModal(true);
  }

  const handleUnlock = () => {
    if (unlockTxt == "老公最棒") {
      navigate("Memory");
    } else if (unlockTxt.includes("狗") || unlockTxt.includes("🐶")) {
      setBadUnlockModal(true);
    }
  }

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.bgImg} source={Images.paper_plane} />
      <TouchableOpacity style={styles.backContainer} onPress={() => navigate("Home")}>
        <Image style={styles.backIcon} source={Images.left} />
      </TouchableOpacity>
      {/* main contents */}
      <Animated.View style={[styles.mainContainer, {opacity: opAnim}]}>
        <View style={styles.block}>
          <Text style={styles.contents}>2021年迎来尾声，2022年即将到来。掐肚皮一算，我们已经一起走过了3年。仔细想想，这真是不可思议。</Text>
          <Text style={styles.contents}>这3年，我已经习惯了你的存在。</Text>
          <Text style={styles.contents}>习惯了每天早上叫你起床，</Text>
          <Text style={styles.contents}>习惯了每天白天上班被你骚扰，</Text>
          <Text style={styles.contents}>习惯了每天晚上和你视频，</Text>
          <Text style={styles.contents}>习惯了每天睡前和你互报晚安。</Text>
          <Text style={styles.contents}>所以,</Text>
          <Text style={styles.contents}>接下来1年,接下来3年,接下来一辈子</Text>
          <Text style={styles.contents}>也请老婆多多关照了~</Text>
        </View>
      </Animated.View>
      <View style={styles.additionContainer}>
        <Text style={styles.lotteryText}>👇点击查看2022年运势👇</Text>
        <TouchableOpacity onPress={handleLottery}>
          <Image style={styles.lotteryIcon} source={Images.crystal_ball} />
        </TouchableOpacity>
      </View>
      <Modal
        visible={lotteryModal}
        transparent={true}
        animationType={'fade'}
        onRequestClose={() => setLotteryModal(false)}
      >
        <TouchableWithoutFeedback onPress={() => setLotteryModal(false)}>
          <View style={styles.modalBackground}>
            <TouchableWithoutFeedback>
                <View style={styles.lotteryContentsContainer}>
                  <Text style={styles.lotteryContentsTitle}>
                    {lottery==0 && '大吉'}
                    {lottery==1 && '中吉'}
                    {lottery==2 && '小吉'}
                    {lottery==3 && '末吉'}
                  </Text>
                  <Text style={styles.lotteryContentsText}>
                    {lottery==0 && '顺利入境，学业有成，逢考必过，财源广进。🐶蹄等着你来养哦~'}
                    {lottery==1 && '新的一年，万事如意，身体健康，性福美满。黄还是你黄！'}
                    {lottery==2 && '开开心心，快快乐乐，漂漂亮亮，可可爱爱。你又很膨胀咯'}
                    {lottery==3 && '你完蛋了，你会在第一时间被🐶蹄制裁，洗干净屁股等着吧~'}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    overflow: 'scroll',
    backgroundColor: '#c7b198'
  },
  bgImg: {
    width: wp('95%'),
    maxWidth: 600,
    height: wp('95%') / 4,
    maxHeight: 300,
    marginTop: 10,
    alignSelf: 'center'
  },
  backContainer: {
    position: 'absolute',
    left: 10,
    top: 10
  },
  backIcon: {
    width: 36,
    height: 36
  },
  mainContainer: {
    width: '85%',
    // height: '100%',
    marginTop: 10,
    overflow: 'hidden'
  },
  block: {
    width: '100%',
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
  additionContainer: {
    marginTop: 30,
    marginBottom: 30,
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center',
    borderWidth: 2,
    borderStyle: 'dashed',
    borderRadius: 2,
    borderColor: '#a3423c'
  },
  lotteryText: {
    fontSize: 16,
    fontFamily: 'ZCOOLKuaiLe_400Regular',
    color: '#a3423c'
  },
  lotteryIcon: {
    width: 60,
    height: 60,
    marginTop: 20
  },
  lotteryContentsContainer: {
    width: '80%',
    // height: 200,
    borderRadius: 18,
    backgroundColor: '#fcd8d4'
  },
  lotteryContentsTitle: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 10
  },
  lotteryContentsText: {
    fontSize: 16,
    lineHeight: 24,
    marginHorizontal: 20,
    marginTop: 15,
    marginBottom: 20
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 15
  },
  input: {
    width: '50%',
    fontSize: 16,
    paddingLeft: 3,
    marginRight: 10,
    Color: 'rgba(0,0,0,0.8)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.8)'
  },
  unlockIcon: {
    width: 24,
    height: 24
  },
  badUnlockContainer: {
    width: '60%',
    alignItems: 'center',
    padding: 20,
    borderRadius: 18,
    backgroundColor: '#fcd8d4',
    opacity: 0.85
  },
  badUnlockContents: {
    fontSize: 18,
    fontFamily: 'ZCOOLKuaiLe_400Regular',
    color: '#a3423c'
  },
  modalBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)'
  }
});

export default Future;