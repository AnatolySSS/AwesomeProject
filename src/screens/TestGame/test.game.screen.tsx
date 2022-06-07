import React, { FC, useState } from "react";
import { 
  Animated, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  Image, 
  TouchableOpacity, 
  Dimensions, 
  Easing
} from "react-native";

const { width, height } = Dimensions.get("window")
let currentCount = 0
const circleWidth = 100
const circleHeight = 100

export const TestGameScreen: FC = () => {

  const [x, setX] = useState(width / 2 - circleWidth / 2)
  const [y, setY] = useState(height / 2 - circleHeight / 2)

  const position = useState(new Animated.ValueXY({x: x, y: y}))[0]

  const changePosition = () => {
    setX(Math.floor(Math.random() * (width - circleWidth)))
    setY(Math.floor(Math.random() * (height - circleHeight - 100)))
    currentCount++
  }

  const makeJump = () => {
    changePosition()
    Animated.timing(position, {
      toValue: {x: x, y: y},
      duration: 500,
      useNativeDriver: false,
      easing: Easing.bounce,
    }).start()
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{textAlign:'center', fontSize: 40}}> { currentCount } </Text>
      {/* <Text style={{textAlign:'center', fontSize: 20}}> {'width: ' + width + ' height: ' + height + ' x: ' + x + ' y: ' + y} </Text> */}
      <Animated.View style={position.getLayout()}>
        <TouchableOpacity onPressIn={makeJump} activeOpacity={1}>
          <Image  
            style={styles.box}
            source={require('../../res/img/circle_black.png')}
          />
          </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    width: 100,
    height: 100,
  },
});