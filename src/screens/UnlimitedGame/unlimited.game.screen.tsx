/* eslint-disable react-native/no-raw-text */
import { useNavigation } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Box, Button } from 'native-base'
import React, { FC , useState, useRef } from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity,
  Animated,
} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const { width, height } = Dimensions.get("window")
let currentCount = 0

export const UnlimitedGameScreen: FC = () => {

  const componentWillMount = useRef(new Animated.Value(0)).current

  const circleWidth = 100
  const circleHeight = 100

  const [x, setX] = useState(width / 2 - circleWidth / 2)
  const [y, setY] = useState(height / 2 - circleHeight / 2)

  const makeJump = () => {
    setX(Math.floor(Math.random() * (width - circleWidth))),
    setY(Math.floor(Math.random() * (height - circleHeight - 100)))
    currentCount++
  }
  const newCoords = {
    left: x,
    top: y,
    width: circleWidth,
    height: circleHeight,
  }

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar hidden={true} />
        <Text style={{textAlign:'center', fontSize: 40}}> { currentCount } </Text>
        <Text style={{textAlign:'center', fontSize: 20}}> {'width: ' + width + ' height: ' + height + ' x: ' + x + ' y: ' + y} </Text>
        <Box style={styles.container} >
          <TouchableOpacity style={[styles.box, newCoords]} onPress={makeJump} >
            <Image  
              style={styles.box}
              source={require('../../res/img/circle_black.png')}
            />
        </TouchableOpacity>
      </Box>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
  box: {
    width: 100,
    height: 100,
  },
  container: {
    flex: 1,
    // alignItems:'center',
    // justifyContent: 'center',
    // backgroundColor: 'yellow',
  },
  safeAreaView: {
    width: '100%',
    height: '100%',
    // backgroundColor: 'red',
  }
})
