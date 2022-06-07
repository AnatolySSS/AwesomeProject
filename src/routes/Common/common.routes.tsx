import React from 'react'
import type { FC } from 'react'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator()

import { HomeScreen, UnlimitedGameScreen, TournamentGameScreen, TestGameScreen } from '../../screens'
// import { TCommonRoutes } from '~types'

export const CommonRoutes: FC = () => {
  // const Stack = createNativeStackNavigator<TCommonRoutes>()

  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Test"
        component={TestGameScreen}
        options={{ title: 'Tournament' }}
      />
      <Tab.Screen
        name="Game"
        component={TournamentGameScreen}
        options={{ title: 'Tournament' }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
      <Tab.Screen
        name="Profile"
        component={UnlimitedGameScreen}
        options={{ title: 'Unlimited' }}
      />
    </Tab.Navigator>
  )
}
