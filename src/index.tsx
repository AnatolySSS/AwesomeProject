/* eslint-disable no-console */
// https://github.com/Intellicode/eslint-plugin-react-native/issues/271
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider } from 'native-base'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { CommonRoutes } from './routes'

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <SafeAreaProvider>
          <CommonRoutes />
        </SafeAreaProvider>
      </NavigationContainer>
    </NativeBaseProvider>
  )
}

export default App

// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, no-constant-condition
// export default false ? StorybookUIRoot : App

// export default Reactotron.storybookSwitcher(storybook)(App)
// https://github.com/infinitered/reactotron/issues/1160
