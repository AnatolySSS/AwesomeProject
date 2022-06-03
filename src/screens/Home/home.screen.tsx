/* eslint-disable react-native/no-raw-text */
import { useNavigation } from '@react-navigation/native'
import { Box, Button } from 'native-base'
import type { FC } from 'react'
import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions
} from 'react-native'
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions
} from 'react-native/Libraries/NewAppScreen'

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

export const HomeScreen: FC = () => {

  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
  }

  return (
    <SafeAreaView style={backgroundStyle}>

      <StatusBar hidden={true} />

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
      >
        {/* <Header /> */}

        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white
          }}
        >
          <Box alignItems="center">
            <Text>HomeScreen</Text>
          </Box>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700'
  }
})
