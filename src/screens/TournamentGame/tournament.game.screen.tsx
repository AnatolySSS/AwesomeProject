import React, { FC, useEffect, useRef, useState } from "react";
import { 
  Animated, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  Image, 
  TouchableOpacity, 
  Dimensions 
} from "react-native";

const { width, height } = Dimensions.get("window")
let currentCount = 0
const circleWidth = 100
const circleHeight = 100
let gameOver = ""
let bestScore = 0

export const TournamentGameScreen: FC = () => {

  const [time, setTime] = useState(10)
  const intervalRef = useRef()

  useEffect(() => {
    if (time != 0) {
      intervalRef.current = setInterval(
        () => setTime((time) => time - 1),
        1000
      )
    } else {
      if (currentCount > bestScore ) {
        gameOver = "NEW RECORD "
      } else {
        gameOver = "Your score is "
      }
      clearInterval(intervalRef.current)
    }
  
    return () => {
      clearInterval(intervalRef.current)
    }
  })

  const [x, setX] = useState(width / 2 - circleWidth / 2)
  const [y, setY] = useState(height / 2 - circleHeight / 2)

  const position = useState(new Animated.ValueXY({x: x, y: y}))[0]

  const changePosition = () => {
    setX(Math.floor(Math.random() * (width - circleWidth)))
    setY(Math.floor(Math.random() * (height - circleHeight - 150)))
    currentCount++
  }

  const restart = () => {
    setTime(10)
    currentCount = 0
    gameOver = ""
  }

  const makeJump = () => {
    if (time !=0) {
      changePosition()
      Animated.timing(position, {
        toValue: {x: x, y: y},
        duration: 500,
        useNativeDriver: false,
      }).start()
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{textAlign:'center', fontSize: 40}}> { gameOver + currentCount } </Text>
      <Text style={{textAlign:'center', fontSize: 40}}> { time } </Text>
      {/* <Text style={{textAlign:'center', fontSize: 20}}> {'width: ' + width + ' height: ' + height + ' x: ' + x + ' y: ' + y} </Text> */}
      <Animated.View style={position.getLayout()}>
        <TouchableOpacity onPressIn={makeJump} onLongPress={restart} activeOpacity={1}>
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